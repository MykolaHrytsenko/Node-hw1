const fs = require("fs/promises");
const path = require("path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

const listContacts = async () => {
    const result = await fs.readFile(contactsPath, "utf-8");
    return JSON.parse(result);

}
// async function listContacts() {
//     try {
//         const data = await fs.readFile(contactsPath);
//         console.table(JSON.parse(data));
//     } catch (error) {
//         console.log(error);
//     }
// }

// console.log(listContacts())


// async function getContactById(contactId) {
//     try {
//         const data = await fs.readFile(contactsPath);
//         const normalizedData = JSON.parse(data);
//         const result = normalizedData.find(
//             (contact) => contact.id.toString() === contactId.toString()
//         );
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }


module.exports = {
    listContacts,
}