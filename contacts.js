const fs = require("fs/promises");
const path = require("node:path");

const contactsPath = path.join(__dirname, "db", "contacts.json");

async function listContacts() {
    try {
        const data = await fs.readFile(contactsPath);
        console.table(JSON.parse(data));
    } catch (error) {
        console.log(error);
    }
}

console.log(listContacts())

// function getContactById(contactId) {
//     // ...твій код
// }

// function removeContact(contactId) {
//     // ...твій код
// }

// function addContact(name, email, phone) {
//     // ...твій код
// }