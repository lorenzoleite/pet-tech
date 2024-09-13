import { makeFindAddressByPersonUseCase } from '@/use-cases/factory/make-find-address-by-person-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

export async function findAddress(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const registerParamsSchema = z.object({
    id: z.coerce.number()
  });

  const registerBodySchema = z.object({
    page: z.coerce.number(),
    limit: z.coerce.number()
  });

  const { id } = registerParamsSchema.parse(request.params);
  const { page, limit } = registerBodySchema.parse(request.body);

  const findAddressByPersonUseCase = makeFindAddressByPersonUseCase();

  const address = await findAddressByPersonUseCase.handler(id, page, limit);

  reply.status(200).send(address);
}
