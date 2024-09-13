import { FastifyInstance } from 'fastify';
import { create } from './create';
import { findAddress } from './find-address';

export async function addressRoutes(app: FastifyInstance) {
  app.get('/address/:id', findAddress);
  app.post('/address', create);
}
