import { User } from '@/modules/users/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

// @Injectable()
// export class UsersRepository extends Repository<User> {
//   constructor(dataSource: DataSource) {
//     super(User, dataSource.createEntityManager());
//   }

//   async findAll() {
//     return this.findAll();
//   }
// }

@Injectable()
export class UsersRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll() {
    return this.userRepository.find();
  }
}
