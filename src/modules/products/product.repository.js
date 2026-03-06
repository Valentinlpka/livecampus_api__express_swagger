const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const findAll = async () => {
  return prisma.product.findMany();
};

const findById = async (id) => {
  return prisma.product.findUnique({ where: { id } });
};

const create = async (data) => {
  return prisma.product.create({ data });
};

const update = async (id, data) => {
  return prisma.product.update({ where: { id }, data });
};

const patch = async (id, data) => {
  return prisma.product.update({ where: { id }, data });
};

const remove = async (id) => {
  return prisma.product.delete({ where: { id } });
};

module.exports = { findAll, findById, create, update, patch, remove };