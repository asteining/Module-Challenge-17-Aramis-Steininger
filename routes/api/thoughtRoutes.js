const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController');

// Routes: /api/thoughts
router.route('/')
  .get(getThoughts)
  .post(createThought);

router.route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// Routes for reactions on a thought
router.route('/:thoughtId/reactions')
  .post(addReaction);

router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction);

module.exports = router;
