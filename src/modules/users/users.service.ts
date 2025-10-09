import { AuthService } from '@/modules/auth/auth.service';
import { CreateUserDto } from '@/modules/users/dto/create-user.dto';
import { UserEntity } from '@/modules/users/entities/user.entity';
import { UsersRepository } from '@/modules/users/user.repository';
import { ConflictException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepository: UsersRepository,
    private readonly authService: AuthService,
  ) {}

  async createUser(createUserDto: CreateUserDto): Promise<{
    user: UserEntity;
    access_token: string;
    refresh_token: string;
  }> {
    const { password, account, ...rest } = createUserDto;

    const existingUser = await this.userRepository.findUserByAccount(account);
    if (existingUser) {
      throw new ConflictException('이미 가입된 계정입니다.');
    }

    const saltRound = 11;
    const hashedPass = await bcrypt.hash(password, saltRound);

    const newUser = await this.userRepository.createUser({
      ...rest,
      account,
      password: hashedPass,
    });

    const { accessToken, refreshToken } = await this.authService.generateTokens(newUser);

    const hashedRefreshToken = await bcrypt.hash(refreshToken, saltRound);

    await this.userRepository.updateRefreshToken(newUser.id, hashedRefreshToken);

    return { user: newUser, access_token: accessToken, refresh_token: refreshToken };
  }
}
