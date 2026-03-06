const service = require("./order.service");

const getAll = async (req, res, next) => {
  try {
    const orders = await service.getAllOrders();
    res.status(200).json(orders);
  } catch (err) {
    next(err);
  }
};

const getOne = async (req, res, next) => {
  try {
    const order = await service.getOrderById(req.params.id);
    res.status(200).json(order);
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const order = await service.createOrder(req.body);
    console.log("Commande créée :", order.id);
    res.status(201).json(order);
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  try {
    const order = await service.updateOrder(req.params.id, req.body);
    res.status(200).json(order);
  } catch (err) {
    next(err);
  }
};

const remove = async (req, res, next) => {
  try {
    await service.deleteOrder(req.params.id);
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};

module.exports = { getAll, getOne, create, update, remove };
