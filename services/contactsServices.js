// import fs from "fs/promises";
// import { nanoid } from "nanoid";
// import path from "node:path";

// const rootDir = process.cwd();
// const contactsPath = path.join(rootDir, "db", "contacts.json");

// async function listContacts() {
//   const data = await fs.readFile(contactsPath, "utf-8");

//   return JSON.parse(data);
// }

// async function getContactById(contactId) {
//   const data = await fs.readFile(contactsPath, "utf-8");
//   const contacts = JSON.parse(data);
//   return contacts.find((contact) => contact.id === contactId || null);
// }

// async function removeContact(contactId) {
//   const data = await fs.readFile(contactsPath, "utf-8");
//   const contacts = JSON.parse(data);

//   const contactIndex = contacts.findIndex(
//     (contact) => contact.id === contactId
//   );
//   if (contactIndex === -1) {
//     return null;
//   }

//   const [removedContact] = contacts.splice(contactIndex, 1);
//   await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2), "utf-8");
//   return removedContact;
// }

// async function addContact(name, email, phone) {
//   const data = await fs.readFile(contactsPath, "utf-8");
//   const contacts = JSON.parse(DataTransferItem);
//   const newContact = {
//     id: nanoid(),
//     name,
//     email,
//     phone,
//   };
//   contacts.push(newContact);
//   await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2), "utf-8");

//   return newContact;
// }

// async function updateContact(id, name, email, phone) {
//   const data = await fs.readFile(contactsPath, "utf-8");
//   let contacts = JSON.parse(data);

//   const [contact] = contacts.filter((el) => el.id === id);
//   if (contact) {
//     contact.name = name !== undefined ? name : contact.name;
//     contact.email = email !== undefined ? email : contact.email;
//     contact.phone = phone !== undefined ? phone : contact.phone;
//   }
//   await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2), "utf-8");
//   return contact;
// }
// export default {
//   listContacts,
//   getContactById,
//   addContact,
//   removeContact,
//   updateContact,
// };

import Contact from "../db/models/contact.js";

export const listContacts = () => Contact.find();
