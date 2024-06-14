import { Client, IntentsBitField, Events } from "discord.js";
import { config } from "dotenv"; config();

import { handleCommand } from "./src/handlers/interactionHandler.js"

import { registerCommands } from "./src/util/commandManager.js";

const bot = new Client({ intents: new IntentsBitField(121823) });

await registerCommands();

bot.on(Events.InteractionCreate, async (interaction) => {
    await handleCommand(interaction);
});

bot.once(Events.ClientReady, (client) => {
    console.log(`logged in as "${client.user.tag}"`);
});

bot.login(process.env.token);