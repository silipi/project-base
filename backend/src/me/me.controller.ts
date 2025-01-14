import { AuthService } from '@/auth/auth.service';
import { UsersService } from '@/users/users.service';
import { Controller, Get, Req } from '@nestjs/common';
import { Request } from 'express';

@Controller('me')
export class MeController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Get('user')
  async getUser(@Req() request: Request) {
    const userId = await this.authService.getUserIdFromRequest(request);
    const user = await this.usersService.findOne({ id: userId });
    delete user.password;

    return user;
  }
}
