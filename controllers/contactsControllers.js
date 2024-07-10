import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact,
} from "../services/contactsServices.js";
import HttpError from "../helpers/HttpError.js";

export const getAllContacts = async (req, res, next) => {
  try {
    const data = await listContacts();

    res.json({
      status: 200,
      message: "Contacts get successfully",
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const getOneContact = async (req, res, next) => {
  try {
    const { id } = req.params;

    const data = await getContactById(id);

    if (!data) {
      throw HttpError(404);
    }

    res.json({
      status: 200,
      message: `Contact with id ${id} get successfully`,
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteContact = async (req, res, next) => {
  try {
    const { id } = req.params;

    const data = await removeContact(id);

    if (!data) {
      throw HttpError(404);
    }

    res.json({
      status: 200,
      message: `Contact with id ${id} was deleted successfully`,
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const createContact = async (req, res, next) => {
  try {
    const { name, email, phone, favorite } = req.body;

    const data = await addContact(name, email, phone, favorite);

    if (!data) {
      throw HttpError(400);
    }

    res.status(201).json({
      status: 201,
      message: `Contact ${data.id} was added successfully`,
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const updContact = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, email, phone } = req.body;
    const data = await updateContact(id, name, email, phone);

    if (!data) {
      throw HttpError(404);
    }

    res.json({
      status: 200,
      message: `Contact with id ${id} was updated successfully`,
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const editFavoriteStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { favorite } = req.body;

    const data = await updateStatusContact(id, favorite);
    if (!data) {
      throw HttpError(404);
    }

    res.json({
      status: 200,
      message: `Contact with id ${id} was updated successfully`,
      data,
    });
  } catch (error) {
    next(error);
  }
};
