import { Express, Request, Response } from 'express';
import { listWorkouts, createWorkout, readWorkout, updateWorkout, deleteWorkout } from '../services/workout.service';
import logger from '../utils/logger';

function workoutController(app: Express) {
  app.get('/', async (req: Request, res: Response) => {
    try {
      const data = await listWorkouts();
      return res.send(data);
    } catch (error: any) {
      logger.error(error);
      return res.status(409).send(error.message);
    }
  });

  app.post('/', async (req: Request, res: Response) => {
    try {
      const data = await createWorkout(req.body);
      return res.send(data);
    } catch (error: any) {
      logger.error(error);
      return res.status(409).send(error.message);
    }
  });

  app.get('/:id', async (req: Request, res: Response) => {
    try {
      const data = await readWorkout(req.params.id);
      return res.send(data);
    } catch (error: any) {
      logger.error(error);
      return res.status(409).send(error.message);
    }
  });

  app.put('/:id', async (req: Request, res: Response) => {
    try {
      const data = await updateWorkout(req.params.id, req.body);
      return res.send(data);
    } catch (error: any) {
      logger.error(error);
      return res.status(409).send(error.message);
    }
  });

  app.delete('/:id', async (req: Request, res: Response) => {
    try {
      const data = await deleteWorkout(req.params.id);
      return res.send(data);
    } catch (error: any) {
      logger.error(error);
      return res.status(409).send(error.message);
    }
  });
};

export default workoutController;
