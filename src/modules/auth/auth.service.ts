import { UsersRepository } from '@/modules/users/user.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(private readonly userRepository: UsersRepository) {}

  async findAll() {
    this.userRepository.findAll();
  }
}
