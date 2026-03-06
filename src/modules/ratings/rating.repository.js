const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const findAll = async () => {
  return prisma.rating.findMany({ include: { user: true, product: true } });
};

const findById = async (id) => {
  return prisma.rating.findUnique({
    where: { id },
    include: { user: true, product: true },
  });
};

const create = async (data) => {
  return prisma.rating.create({ data });
};

const update = async (id, data) => {
  return prisma.rating.update({ where: { id }, data });
};

const patch = async (id, data) => {
  return prisma.rating.update({ where: { id }, data });
};

const remove = async (id) => {
  return prisma.rating.delete({ where: { id } });
};

module.exports = { findAll, findById, create, update, patch, remove };
