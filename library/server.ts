import * as socket from "socket";

import * as csv from "./csv";
import { handleMessage } from "./server/_exports";

const botHost = "0.0.0.0";
const botPort = 21_122;
const gameHost = "0.0.0.0";
const gamePort = 21_121;

let connection: ReturnType<typeof socket.udp>;

const server = {
	isReady: () => connection !== undefined,
	listen: () => {
		if (server.isReady()) {
			const [actualData] = connection.receive();

			const data = actualData;

			if (data) {
				handleMessage(data);
			}

			socket.sleep(0.001);
		}
		else {
			connection = socket.udp();
			connection.settimeout(0);
			connection.setsockname(gameHost, gamePort);
			connection.setpeername(botHost, botPort);
		}
	},
	sendMessage: (message: Record<string, any> | string) => {
		let actualMessage = message;

		if (typeof actualMessage !== "string") {
			actualMessage = [actualMessage.type, csv.stringify(actualMessage.content)].join("|");
		}

		connection.send(actualMessage);
	}
};

export default server;
