import { states } from "./handle-state/_exports.js";

/**
 *
 * @param stateKey
 * @param options0 - The root object
 * @param options0.content - The root object
 * @example
 */
const handleState = (stateKey, { content }) => {
	if (states.has(stateKey)) {
		const state = states.get(stateKey);

		console.info(stateKey);
		console.info({
			content,
			state
		});

		// switch (stateKey) {
		// 	case "selectingHand":
		// }
	}
	else {
		console.error(`Unsupported state: ${stateKey}`);
	}
};

export default handleState;
