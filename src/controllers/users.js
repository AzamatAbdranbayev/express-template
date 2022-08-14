import { ObjectId } from 'mongodb';
import { ApiError } from '../helpers/err.js';
import { UsersService } from '../services/logic/users.js';

export class UsersController {
  constructor() {
    this.service = new UsersService();
  }

  async getAll(req, res) {
    try {
      const users = await this.service.getAll();
      res.send(users);
    } catch (e) {
      res.status(400).send(e);
    }
  }

  async getOneUser(req, res) {
    try {
      if (!req.params.id || !ObjectId.isValid(req.params.id)) {
        throw new ApiError(400, 'undefined user id or not valid');
      }

      const user = await this.service.getOne(req.params.id);
      res.send(user);
    } catch (e) {
      res.status(400).send(e);
    }
  }

  async create(req, res) {
    try {
      const user = await this.service.create(req.body);
      res.send(user);
    } catch (e) {
      res.status(400).send(e);
    }
  }

  async deleteOneUser(req, res) {
    try {
      if (!req.params.id || !ObjectId.isValid(req.params.id)) {
        throw new ApiError(400, 'undefined user id or not valid');
      }

      const user = await this.service.deleteOne(req.params.id);
      res.send(user);
    } catch (e) {
      res.status(400).send(e);
    }
  }

  async updateOne(req, res) {
    try {
      if (!req.params.id || !ObjectId.isValid(req.params.id)) {
        throw new ApiError(400, 'undefined user id or not valid');
      }

      const user = await this.service.updateOne(req.params.id, req.body);
      res.send(user);
    } catch (e) {
      res.status(400).send(e);
    }
  }
}
