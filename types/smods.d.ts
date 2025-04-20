/** @noSelfInFile **/
declare global {
	namespace SMODS {
		interface Atlas {
			get(): string
		}

		interface AtlasConstructor {
			(this: void, options: Record<string, any>): Atlas,
			getInstance(): Atlas
		}

		const Atlas: AtlasConstructor;

		const MODS_DIR: string;
		const can_load: true;
		const config_file: "config.lua";
		const id: "Steamodded";
		const meta_mod: true;
		const path: string;
		const version: string;
	}

	const tprint: (table: any) => void;
	const inspect: (table: any) => void;

}
export {};
