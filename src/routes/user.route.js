import { Router } from 'express';
import StreamController from '../controllers/stream.controller';

const router = Router();

// set routes for each controller action
router.get('/:id', StreamController.getAUserReport);

export default router;