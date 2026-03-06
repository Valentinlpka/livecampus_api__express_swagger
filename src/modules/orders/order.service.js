const repository = require("./order.repository");
const productRepository = require("../products/product.repository");

const getAllOrders = async () => {
  return repository.findAll();
};

const getOrderById = async (id) => {
  const order = await repository.findById(id);
  if (!order) {
    const err = new Error("Commande introuvable");
    err.statusCode = 404;
    throw err;
  }
  return order;
};

const createOrder = async (data) => {
  // Calculer le total en récupérant les prix des produits
  let total = 0;
  for (const item of data.products) {
    const product = await productRepository.findById(item.productId);
    if (!product) {
      const err = new Error(`Produit ${item.productId} introuvable`);
      err.statusCode = 404;
      throw err;
    }
    total += product.price * item.quantity;
  }

  return repository.create({ ...data, total });
};

const updateOrder = async (id, data) => {
  await getOrderById(id);
  return repository.update(id, data);
};

const deleteOrder = async (id) => {
  await getOrderById(id);
  return repository.remove(id);
};

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
};
