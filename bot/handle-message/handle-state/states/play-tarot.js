import { Action, State } from "./_common/_exports.js";

const playTarot = new State(
	new Map([
		[
			"wait",
			new Action(new Set([
				"roundEval",
				"selectingHand",
				"shop",
				"smodsBoosterOpened"
			]))
		]
	])
);

export default playTarot;
