import { readDB, updateDB, writeDB } from '../database/index.js';

export const productController = {
  async create(req, res, next) {
    try {
      const body = req.body;

      const product = {
        id: 1,
        name: 'iPhone 13',
        price: 999.99,
        description: 'Latest Apple iPhone',
        stock: 50,
      };
      if (!body.name || !body.price || !body.description || !body.stock) {
        res.status(400).send("Malumotlar to'liq emas!");
        return;
      }
      const products = await readDB('products');

      if (!products.ok) {
        throw new Error('Error on read on product.json');
      }

      const newProduct = {
        ...req.body,
        id: products.data.length + 1,
      };

      await writeDB('products', newProduct);

      res.status(201).send('created!');
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  async findAll(req, res, next) {
    try {
      const products = await readDB('products');

      if (!products.ok) {
        throw new Error('Error on read on product.json');
      }

      res.status(200).send(products.data);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  async findOne(req, res, next) {
    try {
      // const id = +req.params.id;
      const { id } = req.params;

      const products = await readDB('products');

      if (!products.ok) {
        throw new Error('Error on read on product.json');
      }
      const oneProduct = products.data.filter(
        (product) => product.id === parseInt(id),
      );

      if (!oneProduct) {
        res.status(404).send('Product not found!.');
        return;
      }
      res.status(200).send(oneProduct);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  async update(req, res, next) {
    try {
      const body = req.body;
      const { id } = req.params;

      const result = await updateDB('products', +id, body);
      res.send(result);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  delete(req, res, next) {},
};
