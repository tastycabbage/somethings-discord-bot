import { Client, IntentsBitField, Events } from "discord.js";
import { config } from "dotenv"; config();

import { handleCommand } from "./src/handlers/interactionHandler.js"

import { registerCommands } from "./src/managers/commandManager.js";
import { emptyCheck } from "./src/managers/utilitiesManager.js";

const bot = new Client({ intents: new IntentsBitField(121823) });

await registerCommands();

bot.on(Events.InteractionCreate, async (interaction) => {
    if(interaction.isChatInputCommand()) {
        await emptyCheck(interaction.user.id, interaction.guildId);

        await handleCommand(interaction);
    }
});

bot.once(Events.ClientReady, (client) => {
    console.log(`logged in as "${client.user.tag}"`);
});

bot.login(process.env.token);