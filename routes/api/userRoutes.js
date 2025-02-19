const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// Routes: /api/users
router.route('/')
  .get(getUsers)
  .post(createUser);

router.route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

// Routes: /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;
