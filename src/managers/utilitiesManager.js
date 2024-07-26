import { JSONFilePreset } from 'lowdb/node';

const usersData = await JSONFilePreset("../databases/users.json", {});
const itemsData = await JSONFilePreset("../databases/items.json", {});

async function emptyCheck(user, guild) {
    await usersData.read();
    console.log(usersData.data[user]);
}

export { emptyCheck };