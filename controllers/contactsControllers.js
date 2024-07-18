import {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
  updateStatusContact,
} from "../services/contactsServices.js";
import HttpError from "../helpers/HttpError.js";

import parsePaginationParams from "../helpers/parsePaginationParams.js";

export const getAllContacts = async (req, res, next) => {
  try {
    const { page, limit } = parsePaginationParams(req.query);
    const settings = { page, limit };

    const { _id: owner } = req.user;
    const filter = { owner };
    if (req.query.favorite) {
      filter.favorite = req.query.favorite === "true";
    }
    const data = await listContacts({ filter, settings });

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
    const { id: _id } = req.params;
    const { _id: owner } = req.user;

    const data = await getContactById({ _id, owner });

    if (!data) {
      throw HttpError(404);
    }

    res.json({
      status: 200,
      message: `Contact with id ${_id} get successfully`,
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteContact = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const { _id: owner } = req.user;

    const data = await removeContact({ _id, owner });

    if (!data) {
      throw HttpError(404);
    }

    res.json({
      status: 200,
      message: `Contact with id ${_id} was deleted successfully`,
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const createContact = async (req, res, next) => {
  try {
    const { _id: owner } = req.user;
    const { name, email, phone, favorite } = req.body;

    const data = await addContact(name, email, phone, favorite, owner);

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
    const { id: _id } = req.params;
    const { _id: owner } = req.user;

    const data = await updateContact({ _id, owner }, req.body);

    if (!data) {
      throw HttpError(404);
    }

    res.json({
      status: 200,
      message: `Contact with id ${_id} was updated successfully`,
      data,
    });
  } catch (error) {
    next(error);
  }
};

export const editFavoriteStatus = async (req, res, next) => {
  try {
    const { id: _id } = req.params;
    const { _id: owner } = req.user;
    const { favorite } = req.body;

    const data = await updateStatusContact({ _id, owner }, favorite);
    if (!data) {
      throw HttpError(404);
    }

    res.json({
      status: 200,
      message: `Contact with id ${_id} was updated successfully`,
      data,
    });
  } catch (error) {
    next(error);
  }
};
