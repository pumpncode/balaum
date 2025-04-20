/**
 *
 * @param deckName
 * @example
 */
const startNewRun = () => {
	const _seed = G.run_setup_seed && G.setup_seed || G.forced_seed || null;
	const _challenge = G.challenge_tab || null;
	const _stake = G.forced_stake || G.PROFILES[G.SETTINGS.profile].MEMORY.stake || 1;

	G.FUNCS.start_run(
		null,
		{
			challenge: _challenge,
			seed: _seed,
			stake: _stake
		}
	);

	return true;
};

export default startNewRun;
