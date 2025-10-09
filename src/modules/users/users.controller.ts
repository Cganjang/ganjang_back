import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from '@/modules/users/dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/new')
  createUser(@Body() createUserDto: CreateUserDto) {
    const newUser = this.usersService.createUser(createUserDto);

    return newUser;
  }
}
