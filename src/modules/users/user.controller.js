const service = require("./user.service");

const getAll = async (req, res, next) => {
  try {
    const users = await service.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
};

const getOne = async (req, res, next) => {
  try {
    const user = await service.getUserById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const user = await service.createUser(req.body);
    console.log("Utilisateur créé :", user.id);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const user = await service.updateUser(req.params.id, req.body);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

const patch = async (req, res, next) => {
  try {
    const user = await service.patchUser(req.params.id, req.body);
    res.status(200).json(user);
  } catch (err) {
    next(err);
  }
};

const remove = async (req, res, next) => {
  try {
    await service.deleteUser(req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

module.exports = { getAll, getOne, create, update, patch, remove };
