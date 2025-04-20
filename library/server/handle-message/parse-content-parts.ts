import * as csv from "../../csv";

/**
 *
 * @param contentParts
 * @example
 */
const parseContentParts = (contentParts: string[]) => {
	if (contentParts.length > 0) {
		const content = contentParts.join("|");

		return csv.parse(content);
	}

	return [];
};

export default parseContentParts;
