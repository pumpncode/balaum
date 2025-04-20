/** @noSelfInFile */

import queue from "../../queue";

import {
	clickMainMenuPlayButton,
	clickOnNewRun,
	selectDeck,
	startNewRun
} from "./start-run/_exports";

/**
 *
 * @param options0 - The root object
 * @param options0.deck - The root object
 * @example
 */
const startRun = ({
	deck = "Red Deck"
}) => {
	queue(
		[
			clickMainMenuPlayButton,
			clickOnNewRun,

			/**
			 *
			 * @example
			 */
			() => selectDeck(deck),
			startNewRun
		],
		1
	);
};

export default startRun;
