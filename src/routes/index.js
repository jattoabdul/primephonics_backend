import { Router } from 'express';

// import routes
import streamRoutes from './stream.route';

const router = Router();

// use routes
router.use('/streams', streamRoutes);

export default router;
