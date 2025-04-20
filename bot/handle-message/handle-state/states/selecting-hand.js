import { Action, State } from "./_common/_exports.js";

const selectingHand = new State(
	new Map([
		["discardCards", new Action(new Set(["drawToHand"]), new Set(["selectCards"]))],
		["goToMenu", new Action(new Set(["menu"]))],
		["playCards", new Action(new Set(["handPlayed"]), new Set(["selectCards"]))],
		["selectCards", new Action()],
		["selectConsumeable", new Action()],
		["selectJoker", new Action()],
		["sellConsumeable", new Action(new Set(), new Set(["selectConsumeable"]))],
		["sellJoker", new Action(new Set(), new Set(["selectJoker"]))],
		["sortHandByRank", new Action()],
		["sortHandBySuit", new Action()],
		["startRun", new Action(new Set(["blindSelect"]))],
		["useConsumeable", new Action(new Set(["playTarot"]), new Set(["selectConsumeable"]))]
	])
);

export default selectingHand;
