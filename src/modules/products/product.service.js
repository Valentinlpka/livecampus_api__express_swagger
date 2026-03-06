const repository = require("./product.repository");

const getAllProducts = async () => {
  return repository.findAll();
};

const getProductById = async (id) => {
  const product = await repository.findById(id);
  if (!product) {
    const err = new Error("Produit introuvable");
    err.statusCode = 404;
    throw err;
  }
  return product;
};

const createProduct = async (data) => {
  return repository.create(data);
};

const updateProduct = async (id, data) => {
  await getProductById(id);
  return repository.update(id, data);
};

const patchProduct = async (id, data) => {
  await getProductById(id);
  return repository.patch(id, data);
};

const deleteProduct = async (id) => {
  await getProductById(id);
  return repository.remove(id);
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  patchProduct,
  deleteProduct,
};