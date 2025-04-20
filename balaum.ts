import {
	Hook,
	log,
	queue,
	server
} from "./library/_exports";

G.SETTINGS.skip_splash = "Yes";

if (love.update) {
	love.update = Hook.addCallback(
		love.update!,
		() => {
			server.listen();
		}
	);
}

/**
 *
 * @example
 */
queue(
	[
		() => {
			if (server.isReady()) {
				server.sendMessage("ready");

				return true;
			}

			return false;
		}
	]
);

G.E_MANAGER.add_event(
	Event({
		blocking: false,
		delay: 5,
		func: () => {
			let currentState: number | undefined;

			const stateEvent = Event(
				{
					blockable: false,
					blocking: false,
					delay: 1,
					func: () => {
						const state = G.STATE;

						if (state !== currentState) {
							currentState = state;

							const stateKey = Object.entries(G.STATES)
								.find(([key, value]) => value === state)?.[0];

							if (stateKey !== undefined) {
								log(`STATE: ${stateKey}`);
								log(tprint(G.GAME.round_resets.blind_choices));

								if (server.isReady()) {
									server.sendMessage({
										content: {
											blindChoice: G.P_BLINDS?.[G.GAME.round_resets.blind_choices?.Small],
											blindChoices: G.GAME.round_resets.blind_choices?.Small,
											blindTags: G.GAME.round_resets?.blind_tags?.Small,
											state: String(stateKey)
										},
										type: "state"
									});
								}
							}
						}

						stateEvent.start_timer = false;
					},
					no_delete: true,
					pause_force: true,
					timer: "UPTIME",
					trigger: "after"
				}
			);

			G.E_MANAGER.add_event(stateEvent);

			return true;
		},
		no_delete: true,
		trigger: "after"
	}),
	"other"
);

const { Atlas } = SMODS;

Atlas({
	key: "modicon",
	path: "balaum.png",
	px: 26,
	py: 26
});
