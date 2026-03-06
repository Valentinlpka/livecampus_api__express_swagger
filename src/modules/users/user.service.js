const repository = require("./user.repository");

const getAllUsers = async () => {
  return repository.findAll();
};

const getUserById = async (id) => {
  const user = await repository.findById(id);
  if (!user) {
    const err = new Error("Utilisateur introuvable");
    err.statusCode = 404;
    throw err;
  }
  return user;
};

const createUser = async (data) => {
  return repository.create(data);
};

const updateUser = async (id, data) => {
  await getUserById(id);
  return repository.update(id, data);
};

const patchUser = async (id, data) => {
  await getUserById(id);
  return repository.patch(id, data);
};

const deleteUser = async (id) => {
  await getUserById(id);
  return repository.remove(id);
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  patchUser,
  deleteUser,
};
