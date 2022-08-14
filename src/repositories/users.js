import userModel from '../models/user.js';
export class UsersRepository {
  constructor() {
    this.model = userModel;
  }

  async getAll(filter, fields) {
    const users = await this.model.find(filter, fields).lean();
    return users;
  }

  async getOne(filter, fields) {
    const user = await this.model.findOne(filter, fields).lean();
    return user;
  }

  async create(payload) {
    const user = await this.model.create(payload);
    return user;
  }

  async deleteOne(filter) {
    const user = await this.model.deleteOne(filter);
    return user;
  }

  async updateOne(_id, payload) {
    const user = await this.model.findByIdAndUpdate(_id, payload, {
      new: true,
    });
    return user;
  }
}
