/**
 *
 * @example
 */
const clickMainMenuPlayButton = () => {
	if (G.MAIN_MENU_UI) {
		const playButton = G.MAIN_MENU_UI.get_UIE_by_ID("main_menu_play");

		if (playButton) {
			G.FUNCS.setup_run({ config: {} });

			return true;
		}
	}

	return false;
};

export default clickMainMenuPlayButton;
