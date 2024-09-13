import { Person } from '@/entities/person.entity';
import { User } from '@/entities/user.entity';

export interface IUserRepository {
  create(user: User): Promise<User | undefined>;
  findWithPerson(userId: number): Promise<(User & Person) | undefined>;
}
