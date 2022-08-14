import { ApiError } from '../../helpers/err.js';
import { UsersUseCases } from '../use-cases/user.js';

export class UsersService {
  constructor() {
    this.useCases = new UsersUseCases();
  }

  async getAll() {
    const users = await this.useCases.getAll({}, {});
    return users;
  }

  async getOne(_id) {
    const user = await this.useCases.getOne({ _id }, {});
    return user;
  }

  async create(payload) {
    try {
      const user = await this.useCases.create(payload);
      return user;
    } catch (e) {
      throw new ApiError(400, e?.message);
    }
  }

  async deleteOne(_id) {
    const user = await this.useCases.deleteOne({ _id });
    return user;
  }

  async updateOne(_id, payload) {
    const user = await this.useCases.updateOne(_id, payload);
    return user;
  }
}
