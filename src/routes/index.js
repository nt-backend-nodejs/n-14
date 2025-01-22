import { Router } from 'express';
import { authRouter } from './auth.routes.js';
import { ticketRouter } from './ticket.routes.js';


export const apiRouter = Router();


apiRouter.use('/auth', authRouter);
apiRouter.use('/ticket', ticketRouter);