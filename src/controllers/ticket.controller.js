import { Ticket } from '../models/index.js';

export const ticketController = {
  async create(req, res, next) {
    try {
      const body = req.body;
      if (!body) {
        throw new Error('Ticket data is required');
      }
      if (
        !body.title ||
        !body.description ||
        !body.category ||
        !body.status ||
        !body.price ||
        !body.date ||
        !body.location ||
        !body.totalQuantity
      ) {
        throw new Error('All fields are required');
      }
      const ticket = new Ticket(body);
      await ticket.save();

      res.status(201).json(ticket);
    } catch (error) {
      next(error);
    }
  },
  async getAll(req, res, next) {
    try {
      const query = req.query;

      const page = query.page || 1;
      const limit = query.limit || 10;
      const orderBy = query.orderBy || 'DESC';
      //https://erp.api.najottalim.uz/api/staff/groups/for-academic/1318/videos?value=&keys[]=origName&page=1&perPage=10&orderBy=DESC
      const skip = (page - 1) * limit;
      // const skip = (5 - 1) * 5; // 20

      const tickets = await Ticket.find()
        .skip(skip)
        .limit(limit)
        .sort({ createdAt: orderBy === 'DESC' ? -1 : 1 });
      res.status(200).json(tickets);
    } catch (error) {
      next(error);
    }
  },
  async getById(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  },
  async update(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  },
  async delete(req, res, next) {
    try {
    } catch (error) {
      next(error);
    }
  },
};
