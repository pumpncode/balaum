import * as csv from "@std/csv";

import { handleMessage } from "./bot/_exports.js";

const encoder = new TextEncoder();

const botHost = "0.0.0.0";
const botPort = 21_122;
const gameHost = "0.0.0.0";
const gamePort = 21_121;

/**
 * @type {Deno.DatagramConn}
 */
let connection;

const server = {
	isReady: () => connection !== undefined,
	listen: async () => {
		if (!server.isReady()) {
			connection = Deno.listenDatagram({
				hostname: botHost,
				port: botPort,
				transport: "udp"
			});

			for await (const [data] of connection) {
				const decoder = new TextDecoder();
				const message = decoder.decode(data);

				handleMessage(message);
			}

			connection.close();
		}
	},
	sendMessage: async (message) => {
		if (server.isReady()) {
			const payload = encoder.encode(message);

			await connection.send(
				payload,
				{
					hostname: gameHost,
					port: gamePort,
					transport: "udp"
				}
			);
		}
	}
};

server.listen();

// const startRunMessageType = "startRun";
// const startRunMessageData = { deck: "Checkered Deck" };
// const startRunMessageContent = csv.stringify(
// 	[startRunMessageData],
// 	{ columns: Object.keys(startRunMessageData) }
// );
// const startRunMessage = [startRunMessageType, startRunMessageContent].join("|");

// console.log(startRunMessage);

// await server.sendMessage(startRunMessage);

export default server;
