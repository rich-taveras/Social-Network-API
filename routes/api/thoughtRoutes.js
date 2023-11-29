const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReactions,
  removeReactions,
} = require('../../controllers/thoughtController');

// /api/Thouhgts
router
.route('/').get(getThoughts).post(createThought);

// /api/Thouhgts/:ThoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/Thouhgts/:ThoughtId/reactions
router.route('/:thoughtId/reactions').post(addReactions);

// /api/Thouhgts/:ThoughtId/reactions/:reactionsId
router.route('/:thoughtId/reactions/:reactionId').delete(removeReactions);

module.exports = router;
