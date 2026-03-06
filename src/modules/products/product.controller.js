const service = require("./product.service");

const getAll = async (req, res, next) => {
  try {
    const products = await service.getAllProducts();
    res.status(200).json(products);
  } catch (err) {
    next(err);
  }
};

const getOne = async (req, res, next) => {
  try {
    const product = await service.getProductById(req.params.id);
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const product = await service.createProduct(req.body);
    console.log("Produit créé :", product.id);
    res.status(201).json(product);
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const product = await service.updateProduct(req.params.id, req.body);
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};

const patch = async (req, res, next) => {
  try {
    const product = await service.patchProduct(req.params.id, req.body);
    res.status(200).json(product);
  } catch (err) {
    next(err);
  }
};

const remove = async (req, res, next) => {
  try {
    await service.deleteProduct(req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

module.exports = { getAll, getOne, create, update, patch, remove };