import { Action, State } from "./_common/_exports.js";

const handPlayed = new State(
	new Map([["wait", new Action(new Set(["drawToHand", "selectingHand"]))]])
);

export default handPlayed;
