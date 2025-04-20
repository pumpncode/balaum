import { Action, State } from "./_common/_exports.js";

const shop = new State(
	new Map([
		["buyAndUseCard", new Action(new Set(["playTarot"]), new Set(["selectCard"]))],
		["buyCard", new Action(new Set(), new Set(["selectCard"]))],
		["buyPack", new Action(new Set(["smodsBoosterOpened"]), new Set(["selectPack"]))],
		["continue", new Action(new Set(["blindSelect"]))],
		["goToMenu", new Action(new Set(["menu"]))],
		["redeemVoucher", new Action(new Set(["playTarot"]), new Set(["selectVoucher"]))],
		["reroll", new Action()],
		["selectCard", new Action()],
		["selectConsumeable", new Action()],
		["selectJoker", new Action()],
		["selectPack", new Action()],
		["selectVoucher", new Action()],
		["sellConsumeable", new Action(new Set(), new Set(["selectConsumeable"]))],
		["sellJoker", new Action(new Set(), new Set(["selectJoker"]))],
		["startRun", new Action(new Set(["blindSelect"]))],
		["useConsumeable", new Action(new Set(["playTarot"]), new Set(["selectConsumeable"]))]
	])
);

export default shop;
