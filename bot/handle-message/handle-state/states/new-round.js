/* eslint-disable unicorn/no-keyword-prefix -- state name */

import { Action, State } from "./_common/_exports.js";

const newRound = new State(
	new Map([["wait", new Action(new Set(["gameOver", "roundEval"]))]])
);

export default newRound;
