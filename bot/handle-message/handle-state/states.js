import * as statesObject from "./states/_exports.js";

const states = new Map(Object.entries(statesObject));

console.log(
	JSON.stringify(
		[...states]
			.map(([key, value]) => [
				key,
				[...value.actions]
					.map(([actionKey, actionValue]) => [actionKey, [...actionValue.leadsTo]])
			])
	)
);

export default states;
