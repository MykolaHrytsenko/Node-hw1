const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid")

const contactsPath = path.join(__dirname, "db", "contacts.json");

const listContacts = async () => {
    const result = await fs.readFile(contactsPath, "utf-8");
    return JSON.parse(result);

}

const getContactById = async (contactId) => {
    const contacts = await listContacts();
    const result = contacts.find(item => item.id === contactId);
    return result || null;
}

const addContact = async ({ name, email, phone }) => {
    const contacts = await listContacts();

    const newContact = {
        id: nanoid(),
        name,
        email,
        phone,
    }

    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return newContact;

}

// function removeContact(contactId) {
//     // ...твій код
// }




module.exports = {
    listContacts,
    getContactById,
    addContact,
}