import { UserRepository } from "@/modules/users/user.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
  constructor(private readonly userRepository: UserRepository) {}

  async findAll() {
    this.userRepository.findAll();
  }
}
