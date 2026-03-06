const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const findAll = async () => {
  return prisma.user.findMany();
};

const findById = async (id) => {
  return prisma.user.findUnique({ where: { id } });
};

const create = async (data) => {
  return prisma.user.create({ data });
};

const update = async (id, data) => {
  return prisma.user.update({ where: { id }, data });
};

const patch = async (id, data) => {
  return prisma.user.update({ where: { id }, data });
};

const remove = async (id) => {
  return prisma.user.delete({ where: { id } });
};

module.exports = { findAll, findById, create, update, patch, remove };
