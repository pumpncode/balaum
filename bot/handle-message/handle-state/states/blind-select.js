import { State } from "./_common/_exports.js";
import * as actions from "./blind-select/_exports.js";

const blindSelect = new State(
	new Map(Object.entries(actions))
);

export default blindSelect;
