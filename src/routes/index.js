import { Router } from 'express';

// import routes
import streamRoutes from './stream.route';
import reportRoutes from './report.route';
import usersRoutes from './user.route';

const router = Router();

// use routes
router.use('/streams', streamRoutes);
router.use('/report', reportRoutes);
router.use('/users', usersRoutes);

export default router;
