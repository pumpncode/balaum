/**
 *
 * @param deckName
 * @example
 */
const clickOnNewRun = () => {
	const id = "tab_but_New Run";

	if (G.OVERLAY_MENU) {
		const tabButton = G.OVERLAY_MENU.get_UIE_by_ID(id);

		if (tabButton) {
			G.FUNCS.change_tab(tabButton);
			G.FUNCS.set_button_pip(tabButton);
			tabButton.click();

			return true;
		}
	}

	return false;
};

export default clickOnNewRun;
