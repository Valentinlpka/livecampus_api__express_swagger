const repository = require("./rating.repository");

const getAllRatings = async () => {
  return repository.findAll();
};

const getRatingById = async (id) => {
  const rating = await repository.findById(id);
  if (!rating) {
    const err = new Error("Rating introuvable");
    err.statusCode = 404;
    throw err;
  }
  return rating;
};

const createRating = async (data) => {
  return repository.create(data);
};

const updateRating = async (id, data) => {
  await getRatingById(id);
  return repository.update(id, data);
};

const patchRating = async (id, data) => {
  await getRatingById(id);
  return repository.patch(id, data);
};

const deleteRating = async (id) => {
  await getRatingById(id);
  return repository.remove(id);
};

module.exports = {
  getAllRatings,
  getRatingById,
  createRating,
  updateRating,
  patchRating,
  deleteRating,
};
