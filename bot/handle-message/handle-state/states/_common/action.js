/**
 *
 */
const Action = class {

	/**
	 *
	 * @param name
	 * @param leadsTo
	 * @param dependencies
	 * @example
	 */
	constructor(leadsTo = new Set(), dependencies = new Set()) {
		this.leadsTo = leadsTo;
		this.dependencies = dependencies;
	}

};

export default Action;
