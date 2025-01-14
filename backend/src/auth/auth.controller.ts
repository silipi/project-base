import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { IsPublicRoute } from '@/common/decorators/public.decorator';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @IsPublicRoute()
  @Post('register')
  async register(@Body() registerDto: RegisterDto) {
    const user = await this.authService.register(registerDto);
    delete user.password;

    return user;
  }

  @IsPublicRoute()
  @Post('login')
  async login(@Body() loginDto: LoginDto) {
    const response = await this.authService.login(loginDto);
    delete response.user.password;

    return response;
  }

  @IsPublicRoute()
  @Get('github')
  @UseGuards(AuthGuard('github'))
  async githubAuth() {}

  @IsPublicRoute()
  @Get('github/callback')
  @UseGuards(AuthGuard('github'))
  async githubAuthCallback(@Req() req, @Res() res) {
    const { access_token } = req.user;
    res.redirect(`${process.env.FRONTEND_URL}/login?token=${access_token}`);
  }

  @IsPublicRoute()
  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {}

  @IsPublicRoute()
  @Get('google/callback')
  @UseGuards(AuthGuard('google'))
  async googleAuthCallback(@Req() req, @Res() res) {
    const { access_token } = req.user;
    res.redirect(`${process.env.FRONTEND_URL}/login?token=${access_token}`);
  }
}
