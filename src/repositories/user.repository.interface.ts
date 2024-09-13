import { IPerson } from '@/entities/models/person.interface';
import { IUser } from '@/entities/models/user.interface';
import { User } from '@/entities/user.entity';

export interface IUserRepository {
  findWithPerson(userId: number): Promise<(IUser & IPerson) | undefined>;
  create(user: User): Promise<IUser | undefined>;
}
