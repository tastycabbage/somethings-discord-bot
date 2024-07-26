import { SlashCommandBuilder } from "discord.js";

export default {
    data: new SlashCommandBuilder()
        .setName("balance")
        .setDescription("Shows the current user's account balance")
        .addUserOption(o => 
            o.setName("user")
            .setDescription("Select the desired user from the list")
            .setRequired(false)),
    async run(int) {
        let user = int.options.getUser("user") ?? int.user
    }
}