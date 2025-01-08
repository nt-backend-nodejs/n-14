import { readDB, updateDB, writeDB } from '../database/index.js';

export const orderController = {
  async create(req, res, next) {
    try {
      const body = req.body;

      if (!body.userId || !body.productId) {
        res.status(400).send({
          message: `Malumotlarni to'liq kiritirng!.`,
        });
        return;
      }

      const usersData = await readDB('users');
      if (!usersData.ok) {
        throw new Error('Error on read user db');
      }
      const productData = await readDB('products');
      if (!productData.ok) {
        throw new Error('Error on read product db');
      }

      const userExists = usersData.data.find((user) => user.id === body.userId);
      if (!userExists) {
        res.status(404).send({
          message: 'User not found!',
        });
        return;
      }
      const productExists = productData.data.find(
        (product) => product.id === body.productId,
      );
      if (!productExists) {
        res.status(404).send({
          message: 'product not found!',
        });
        return;
      }

      await updateDB('products', body.productId, {
        ...productExists,
        stock: productExists.stock - 1,
      });

      await writeDB('orders', {
        userId: body.userId,
        productId: body.productId,
        total: productExists.price,
        status: 'processing',
      });

      res.status(201).send('created!');
    } catch (error) {
      res.status(400).send(error.message);
    }
  },
  findAll(req, res, next) {},
  findOne(req, res, next) {},
  update(req, res, next) {},
  delete(req, res, next) {},
};
