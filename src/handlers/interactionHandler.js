import { getCommand } from "../util/commandManager.js";

async function handleCommand(interaction) {
    if(!interaction.isChatInputCommand()) return;

    let command = await getCommand(interaction.commandName);
    if(!command) return;

    try {
        await command.run(interaction);
    } catch (e) {
        console.error(e);
        await interaction.reply({ content: "error", ephemeral: true });
    }
};

export { handleCommand };