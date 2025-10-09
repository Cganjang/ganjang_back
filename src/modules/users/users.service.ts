import { CreateUserDto } from '@/modules/users/dto/create-user.dto';
import { UserEntity } from '@/modules/users/entities/user.entity';
import { UsersRepository } from '@/modules/users/user.repository';
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}

  async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
    const { password, ...rest } = createUserDto;

    const saltRound = 11;
    const hashedPass = await bcrypt.hash(password, saltRound);

    const newUser = this.userRepository.createUser({
      ...rest,
      password: hashedPass,
    });

    return newUser;
  }
}
