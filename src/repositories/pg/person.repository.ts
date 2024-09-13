import { Person } from '@/entities/person.entity';
import { database } from '@/lib/pg/db';
import { IPersonRepository } from '../person.repository.interface';

export class PersonRepository implements IPersonRepository {
  public async create({
    cpf,
    name,
    birth,
    email,
    user_id
  }: Person): Promise<Person | undefined> {
    const result = await database.clientInstance?.query(
      `INSERT INTO person (cpf, name, birth, email, user_id) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [cpf, name, birth, email, user_id]
    );

    return result?.rows[0];
  }
}
