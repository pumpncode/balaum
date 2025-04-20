import * as csv from "@std/csv";

import { camel } from "@radashi-org/radashi";

import { handleState } from "./handle-message/_exports.js";

/**
 *
 * @param message
 * @example
 */
const handleMessage = (message) => {
	const [type, ...contentParts] = message.split("|");

	let content = {};

	if (contentParts.length > 0) {
		[content] = csv.parse(contentParts.join("|"), { skipFirstRow: true });
	}

	switch (type) {
		case "state": {
			const { state: stateKeyRaw } = content;

			const stateKey = camel(stateKeyRaw.toLowerCase());

			handleState(stateKey, { content });

			break;
		}

		default:
			console.info({
				content,
				type
			});
			break;
	}
};

export default handleMessage;
