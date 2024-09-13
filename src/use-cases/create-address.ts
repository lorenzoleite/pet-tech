import { IAddressRepository } from '@/repositories/address.repository.interface';

interface IAddress {
  id?: number;
  street: string;
  city: string;
  state: string;
  zip_code: string;
  person_id?: string;
}

export class CreateAddressUseCase {
  constructor(private addressRepository: IAddressRepository) {}

  async handler(address: IAddress): Promise<IAddress | undefined> {
    return this.addressRepository.create(address);
  }
}
