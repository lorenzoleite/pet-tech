import { CreatePersonUseCase } from '../create-person';
import { PersonRepository } from '@/repositories/pg/person.repository';

export function makeCreatePersonUseCase() {
  const personRepository = new PersonRepository();
  const createPersonUseCase = new CreatePersonUseCase(personRepository);

  return createPersonUseCase;
}
