/**
 *
 * @param deckName
 * @example
 */
const selectDeck = (deckName = "Red Deck") => {
	if (G.P_CENTER_POOLS && G.P_CENTER_POOLS.Back) {
		const deck = Object.values(G.P_CENTER_POOLS.Back)
			.find(({ name }) => name === deckName);

		const deckKey = Object.entries(G.P_CENTER_POOLS.Back)
			.find(([key, { name }]) => name === deckName)
			?.[0];

		if (deck) {
			G.FUNCS.change_viewed_back({
				to_key: deckKey,
				to_val: deck?.name
			});
			G.FUNCS.change_selected_back({
				to_key: deckKey
			});
			// G.GAME.selected_back.change_to(deck);
			// G.GAME.viewed_back.change_to(deck);

			return true;
		}
	}

	return false;
};

export default selectDeck;
