const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const findAll = async () => {
  return prisma.order.findMany({
    include: {
      user: true,
      products: { include: { product: true } },
    },
  });
};

const findById = async (id) => {
  return prisma.order.findUnique({
    where: { id },
    include: {
      user: true,
      products: { include: { product: true } },
    },
  });
};

const create = async (data) => {
  const { userId, products, total } = data;

  return prisma.order.create({
    data: {
      userId,
      total,
      products: {
        create: products.map((p) => ({
          productId: p.productId,
          quantity: p.quantity,
        })),
      },
    },
    include: {
      user: true,
      products: { include: { product: true } },
    },
  });
};

const update = async (id, data) => {
  return prisma.order.update({ where: { id }, data });
};

const remove = async (id) => {
  // Supprimer d'abord les produits liés à la commande
  await prisma.orderProduct.deleteMany({ where: { orderId: id } });
  return prisma.order.delete({ where: { id } });
};

module.exports = { findAll, findById, create, update, remove };
