import { UsersRepository } from '../../repositories/users.js';

export class UsersUseCases {
  constructor() {
    this.repository = new UsersRepository();
  }

  async getAll(filter, fields) {
    const users = await this.repository.getAll(filter, fields);
    return users;
  }

  async getOne(filter, fields) {
    const user = await this.repository.getOne(filter, fields);
    return user;
  }

  async create(payload) {
    const user = await this.repository.create(payload);
    return user;
  }

  async deleteOne(filter) {
    const user = await this.repository.deleteOne(filter);
    return user;
  }

  async updateOne(_id, payload) {
    const user = await this.repository.updateOne(_id, payload);
    return user;
  }
}
