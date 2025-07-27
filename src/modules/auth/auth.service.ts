import { AuthRepository } from "@/modules/auth/auth.repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

  async findAll() {
    this.authRepository.findAll();
  }
}
