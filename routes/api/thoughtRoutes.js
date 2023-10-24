const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addThoughtResponse,
  removeThoughtResponse,
} = require('../../controllers/thoughtController');

// /api/Thouhgts
router.route('/').get(getThouhgts).post(createThought);

// /api/Thouhgts/:ThoughtId
router
  .route('/:ThoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// /api/Thouhgts/:ThoughtId/responses
router.route('/:ThoughtId/responses').post(addThoughtResponse);

// /api/Thouhgts/:ThoughtId/responses/:responseId
router.route('/:ThoughtId/responses/:responseId').delete(removeThoughtResponse);

module.exports = router;
