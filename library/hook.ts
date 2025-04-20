/* eslint-disable no-unused-vars -- declarations */

/**
 * @file inspired by https://github.com/besteon/balatrobot/blob/04a47c2d9da0f51c6c587a341669ffbd526d422c/lib/hook.lua
 */

interface FunctionMeta {
	breakpoints: Function[],
	callbacks: Function[],
	orig: Function
}

const functionMeta = new WeakMap<Function, FunctionMeta>();

/**
 *
 * @param function_
 * @example
 */
const wrapFunction = <F extends (this: void, ...arguments_: any[]) => any>(function_: F): F => {
	if (functionMeta.has(function_)) {
		for (const [wrapper, meta] of (functionMeta as any).entries()) {
			if (meta.orig === function_) {
				return wrapper as F;
			}
		}
	}

	const meta: FunctionMeta = {
		breakpoints: [],
		callbacks: [],
		orig: function_
	};

	/**
	 * Process breakpoints and return modified arguments
	 *
	 * @param args - Arguments to process
	 * @param arguments_
	 * @returns Modified arguments
	 * @example
	 */
	const processBreakpoints = (arguments_: any[]): any[] => {
		let processed = arguments_;

		for (const breakpoint of meta.breakpoints) {
			const result = breakpoint(...processed);

			if (result !== undefined) {
				processed = Array.isArray(result) ? result : [result];
			}
		}

		return processed;
	};

	/**
	 * Process callbacks and return their output
	 *
	 * @param result - Result from the original function
	 * @param args - Processed arguments from breakpoints
	 * @param arguments_
	 * @returns Callback output
	 * @example
	 */
	const processCallbacks = (result: any, arguments_: any[]): any[] => {
		const callbackArguments = result === undefined ? arguments_ : [result];
		let output: any[] = [];

		for (const callback of meta.callbacks) {
			const callbackResult = callback(...callbackArguments);

			if (callbackResult !== undefined) {
				output = Array.isArray(callbackResult)
					? callbackResult
					: [callbackResult];
			}
		}

		return output;
	};

	/**
	 *
	 * @param {...any} arguments_
	 * @example
	 */
	const wrapper = function (this: void, ...arguments_: any[]) {
		const processedArguments = processBreakpoints(arguments_);
		const originalResult = meta.orig(...processedArguments);
		const callbackOutput = processCallbacks(originalResult, processedArguments);

		if (callbackOutput.length > 0) {
			return callbackOutput.length === 1 ? callbackOutput[0] : callbackOutput;
		}

		return originalResult;
	};

	functionMeta.set(wrapper, meta);

	return wrapper as F;
};

/**
 *
 * @param function_
 * @param list
 * @param type
 * @param hookFunction
 * @param ephemeral
 * @example
 */
const addFunction = <F extends (this: void, ...arguments_: any[]) => any>(
	function_: F,
	type: keyof FunctionMeta,
	hookFunction: Function,
	ephemeral: boolean
): F => {
	if (!hookFunction) {
		return function_;
	}

	const wrappedFunction = wrapFunction(function_);
	const meta = functionMeta.get(wrappedFunction)!;
	const hooksArray = meta[type] as Function[];

	/**
	 *
	 * @param hook
	 * @example
	 */
	const addHook = (hook: Function) => {
		if (ephemeral) {
			hooksArray.push((...arguments_: any[]) => {
				const hookResult = hook(...arguments_);

				if (hookResult === undefined || hookResult === true) {
					hooksArray.splice(hooksArray.indexOf(hook), 1);
				}

				return hookResult;
			});
		}
		else {
			hooksArray.push(hook);
		}
	};

	addHook(hookFunction);

	return wrappedFunction;
};

/**
 *
 * @param function_
 * @param breakpoint
 * @param ephemeral
 * @example
 */
const addBreakpoint = <F extends (this: void, ...arguments_: any[]) => any>(
	function_: F,
	breakpoint: F,
	ephemeral = false
): F => addFunction(function_, "breakpoints", breakpoint, ephemeral);

/**
 *
 * @param function_
 * @param callback
 * @param ephemeral
 * @example
 */
const addCallback = <F extends (this: void, ...arguments_: any[]) => any>(
	function_: F,
	callback: F,
	ephemeral = false
): F => addFunction(function_, "callbacks", callback, ephemeral);

/**
 *
 * @param function_
 * @example
 */
const isHooked = (function_: any): boolean => Boolean(function_ && functionMeta.has(function_));

/**
 *
 * @param function_
 * @example
 */
const clear = <F extends (...arguments_: any[]) => any>(function_: F): F => {
	if (functionMeta.has(function_)) {
		return functionMeta.get(function_)!.orig as F;
	}

	return function_;
};

const Hook = {
	addBreakpoint,
	addCallback,
	clear,
	isHooked
};

export default Hook;
