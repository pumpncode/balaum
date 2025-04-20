import { Action, State } from "./_common/_exports.js";

const roundEval = new State(
	new Map([
		["cashOut", new Action(new Set(["shop"]))],
		["goToMenu", new Action(new Set(["menu"]))],
		["selectConsumeable", new Action()],
		["selectJoker", new Action()],
		["sellConsumeable", new Action(new Set(), new Set(["selectConsumeable"]))],
		["sellJoker", new Action(new Set(), new Set(["selectJoker"]))],
		["startRun", new Action(new Set(["blindSelect"]))],
		["useConsumeable", new Action(new Set(), new Set(["selectConsumeable"]))]
	])
);

export default roundEval;
