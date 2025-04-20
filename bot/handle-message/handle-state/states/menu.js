import { Action, State } from "./_common/_exports.js";

const menu = new State(
	new Map([["startRun", new Action(new Set(["blindSelect"]))]])
);

export default menu;
