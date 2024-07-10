import Contact from "../db/models/contact.js";

export const listContacts = () => Contact.find();

export const getContactById = (_id) => Contact.findOne({ _id });

export const removeContact = (_id) => Contact.findByIdAndDelete({ _id });

export const addContact = (name, email, phone, favorite) =>
  Contact.create({ name, email, phone, favorite });

export const updateContact = (_id, name, email, phone) =>
  Contact.findByIdAndUpdate({ _id }, { name, email, phone }, { new: true });

export const updateStatusContact = (_id, favorite) =>
  Contact.findByIdAndUpdate({ _id }, { favorite }, { new: true });
