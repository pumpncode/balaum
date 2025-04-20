import { Action, State } from "./_common/_exports.js";

const gameOver = new State(
	new Map([["goToMenu", new Action(new Set(["menu"]))], ["startRun", new Action(new Set(["blindSelect"]))]])
);

export default gameOver;
