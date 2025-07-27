import { Module } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UserRepository } from "@/modules/users/user.repository";

@Module({
  imports: [UserRepository],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
