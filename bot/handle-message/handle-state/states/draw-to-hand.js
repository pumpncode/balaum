import { Action, State } from "./_common/_exports.js";

const drawToHand = new State(
	new Map([["wait", new Action(new Set(["selectingHand"]))]])
);

export default drawToHand;
