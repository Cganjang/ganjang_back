import { Body, Controller, Post, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from '@/modules/users/dto/create-user.dto';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('new')
  async createUser(@Body() createUserDto: CreateUserDto, @Res({ passthrough: true }) res: Response) {
    const { user, access_token, refresh_token } = await this.usersService.createUser(createUserDto);

    res.cookie('refresh_token', refresh_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return { user, access_token };
  }
}
