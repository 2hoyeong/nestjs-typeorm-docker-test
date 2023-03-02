import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { CreateUserResponseDto } from './dtos/create-user-response.dto';
import { CreateUserBodyDto } from './dtos/create-user.dto';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('signup')
  @HttpCode(HttpStatus.CREATED)
  async createUser(@Body() body: CreateUserBodyDto): Promise<CreateUserResponseDto> {
    const user = await this.userService.createUser(body);
    return new CreateUserResponseDto(user);
  }
}
