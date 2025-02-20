import { Router } from 'express';
import apiRoutes from './api/index.js';

const router = Router();

router.use('/api', apiRoutes);

// Fallback for incorrect routes
router.use((req, res) => res.status(404).send('Wrong route!'));

export default router;
