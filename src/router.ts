import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (request: Request, response: Response) => {
   return response.json({
      message: 'Hello Word'
   });
});

export { router }