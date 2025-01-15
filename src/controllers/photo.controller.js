import { readDB, updateDB, writeDB } from '../database/index.js';

export const photoController = {
  async create(req, res, next) {
    try {
      console.log(req.file, req.body);

      return  res.send(req.file);
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  async findAll(req, res, next) {
    try {
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  async findOne(req, res, next) {
    try {
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  async update(req, res, next) {
    try {
    } catch (error) {
      res.status(500).send(error.message);
    }
  },
  delete(req, res, next) {},
};
