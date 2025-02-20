import { Router } from 'express';
import userController from '../../controllers/userController.js';

const router = Router();

router.route('/')
  .get(userController.getUsers)
  .post(userController.createUser);

router.route('/:userId')
  .get(userController.getSingleUser)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

router.route('/:userId/friends/:friendId')
  .post(userController.addFriend)
  .delete(userController.removeFriend);

export default router;
