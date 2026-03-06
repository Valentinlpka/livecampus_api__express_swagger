const service = require("./rating.service");

const getAll = async (req, res, next) => {
  try {
    const ratings = await service.getAllRatings();
    res.status(200).json(ratings);
  } catch (err) {
    next(err);
  }
};

const getOne = async (req, res, next) => {
  try {
    const rating = await service.getRatingById(req.params.id);
    res.status(200).json(rating);
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const rating = await service.createRating(req.body);
    console.log("Rating créé :", rating.id);
    res.status(201).json(rating);
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const rating = await service.updateRating(req.params.id, req.body);
    res.status(200).json(rating);
  } catch (err) {
    next(err);
  }
};

const patch = async (req, res, next) => {
  try {
    const rating = await service.patchRating(req.params.id, req.body);
    res.status(200).json(rating);
  } catch (err) {
    next(err);
  }
};

const remove = async (req, res, next) => {
  try {
    await service.deleteRating(req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

module.exports = { getAll, getOne, create, update, patch, remove };
