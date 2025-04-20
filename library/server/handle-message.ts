import log from "../log";

import {
	parseContentParts,
	startRun
} from "./handle-message/_exports";

/**
 *
 * @param message
 * @example
 */
const handleMessage = (message: string) => {
	const [type, ...contentParts] = message.split("|").map((part) => part.trim());

	log(type);

	switch (type) {
		case "startRun": {
			const result = parseContentParts(contentParts);

			const [{ deck }] = result;

			startRun({ deck });

			break;
		}

		default:
			log(tprint(parseContentParts(contentParts)));
			break;
	}
};

export default handleMessage;
