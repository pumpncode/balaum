import { Action, State } from "./_common/_exports.js";

const smodsBoosterOpened = new State(
	new Map([
		["buyCardInPack", new Action(new Set(["blindSelect", "shop"]), new Set(["selectCardInPack"]))],
		["buyConsumeableInPack", new Action(new Set(["blindSelect", "shop"]), new Set(["selectConsumeableInPack"]))],
		["buyJokerInPack", new Action(new Set(["blindSelect", "shop"]), new Set(["selectJokerInPack"]))],
		["goToMenu", new Action(new Set(["menu"]))],
		["selectCardInHand", new Action()],
		["selectCardInPack", new Action()],
		["selectConsumeable", new Action()],
		["selectConsumeableInPack", new Action()],
		["selectJoker", new Action()],
		["selectJokerInPack", new Action()],
		["sellConsumeable", new Action(new Set(), new Set(["selectConsumeable"]))],
		["sellJoker", new Action(new Set(), new Set(["selectJoker"]))],
		["skipPack", new Action(new Set(["blindSelect", "shop"]))],
		["startRun", new Action(new Set(["blindSelect"]))],
		["useConsumeable", new Action(new Set(["playTarot"]), new Set(["selectConsumeable"]))]
	])
);

export default smodsBoosterOpened;
