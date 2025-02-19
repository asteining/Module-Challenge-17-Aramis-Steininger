const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

// Fallback route for wrong endpoints
router.use((req, res) => res.status(404).send('Wrong route!'));

module.exports = router;
