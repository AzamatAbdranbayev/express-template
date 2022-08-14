import express from 'express';
import { UsersController } from '../controllers/users.js';

const router = express.Router();
const usersController = new UsersController();

router.route('/users').get((req, res) => {
  usersController.getAll(req, res);
});

router.route('/user/:id').get((req, res) => {
  usersController.getOneUser(req, res);
});

router.route('/user').post((req, res) => {
  usersController.create(req, res);
});

router.route('/user/:id').delete((req, res) => {
  usersController.deleteOneUser(req, res);
});

router.route('/user/:id').patch((req, res) => {
  usersController.updateOne(req, res);
});
export default router;
