/**
 *
 * @param string
 * @example
 */
const parse = (string: string) => {
	const [firstLine, ...lines] = string.trim().split("\n").map((line) => line.trim());

	const columns = firstLine.split(",");

	return lines.map((line) => {
		const values = line.split(",");

		return Object.fromEntries(
			values.map((value, index) => {
				const column = columns[index];

				return [column, value];
			})
		);
	});
};

/**
 *
 * @param array
 * @param arrayOrObject
 * @param data
 * @example
 */
const stringify = <T extends Record<string, any>>(data: T) => {
	const rows: T[] = Array.isArray(data) ? data : [data];

	if (rows.length === 0) {
		return "";
	}

	const columns = Object.keys(rows[0]);

	return [columns, ...rows.map((item) => columns.map((column) => item[column]))]
		.map((row) => row.join(","))
		.join("\n");
};

export { parse, stringify };
