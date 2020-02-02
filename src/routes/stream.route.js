import { Router } from 'express';
import StreamController from '../controllers/stream.controller';

const router = Router();

// set routes for each controller action
router.get('/', StreamController.getAllStreams);
router.post('/', StreamController.addStream);
router.get('/:id', StreamController.getAStream);
router.put('/:id', StreamController.updatedStream);
router.delete('/:id', StreamController.deleteStream);

export default router;
