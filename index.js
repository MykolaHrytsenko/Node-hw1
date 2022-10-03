const contacts = require("./contacts")

// const argv = require("yargs").argv;

async function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
        case "list":
            const allContacts = await contacts.listContacts();
            console.log(allContacts);
            break;

        case "get":
            const oneContact = await contacts.getContactById(id);
            console.log(oneContact);
            break;

        case "add":
            const addContact = await contacts.addContact({ name, email, phone });
            console.log(addContact);
            break;

        case "remove":
            const removeContact = await contacts.removeContact(id)
            console.log(removeContact);
            break;

        default:
            console.warn("\x1B[31m Unknown action type!");
    }
}

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "1" });
// invokeAction({ action: "add", name: "Fill", email: "niksandler@gmail.com", phone: "(073) 123-4678" })
invokeAction({ action: "remove", id: "VaBFMG0Z27hmQKRuanL0S" })
