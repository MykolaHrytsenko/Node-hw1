const fs = require("fs/promises");
const path = require("node:path");

const contactsPath = path.join(__dirname, "db", "contacts.json");
console.log(contactsPath);


fs.readFile(contactsPath, "utf-8", (error, content) => {
    if (error) {
        console.error(error)
        return;
    }
    const data = JSON.parse(content)
    console.log("Content:", data.content)
})


// fs.readFile('./db/contacts.json', "utf-8", (error, data) => {
//     if (error) {
//         console.error(error)
//         return;
//     }
//     console.log(data)
// })

// function getContactById(contactId) {
//     // ...твій код
// }

// function removeContact(contactId) {
//     // ...твій код
// }

// function addContact(name, email, phone) {
//     // ...твій код
// }