import type Game from "./balatro/game.d.ts";

import "./balatro/back.d.ts";
import "./balatro/card.d.ts";
import "./balatro/cardarea.d.ts";
import "./balatro/event.d.ts";
import "./balatro/game.d.ts";
import "./balatro/moveable.d.ts";
import "./balatro/object.d.ts";
import "./balatro/sprite.d.ts";
import "./balatro/ui.d.ts";

declare global {
	const G: Game;
}

export {};
