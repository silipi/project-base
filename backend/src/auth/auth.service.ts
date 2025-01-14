import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '@/users/users.service';
import * as bcrypt from 'bcrypt';
import { Provider, User } from '@prisma/client';
import { Request } from 'express';
import { ApiException } from '@/common/exceptions/api.exception';
import { ErrorCode } from '@/common/exceptions/error-codes.enum';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async register(registerDto: RegisterDto) {
    const hashedPassword = await bcrypt.hash(registerDto.password, 10);

    const user = await this.usersService.create({
      ...registerDto,
      password: hashedPassword,
    });

    return user;
  }

  async login(loginDto: LoginDto) {
    const user = await this.usersService.findOne({
      email: loginDto.email,
    });

    if (!user) {
      throw new ApiException(ErrorCode.USER_NOT_FOUND, 401);
    }

    const isPasswordValid = await bcrypt.compare(
      loginDto.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new ApiException(ErrorCode.INVALID_CREDENTIALS, 401);
    }

    const access_token = await this.createJwtBearerToken(user);

    return {
      access_token,
      user,
    };
  }

  async createJwtBearerToken(user: User) {
    const token = await this.jwtService.signAsync({
      sub: user.id,
      username: user.username,
      email: user.email,
    });

    return `Bearer ${token}`;
  }

  async getUserIdFromRequest(req: Request) {
    const access_token = this.extractTokenFromHeader(req);
    const payload = await this.jwtService.verifyAsync(access_token);

    return payload.sub;
  }

  private extractTokenFromHeader(request: Request) {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    if (type !== 'Bearer') {
      throw new ApiException(ErrorCode.TOKEN_INVALID, 401);
    }

    return token;
  }

  async validateSocialUser(userData: {
    email: string;
    username: string;
    firstName: string;
    lastName: string;
    provider: Provider;
  }) {
    let user = await this.usersService.findOne({ email: userData.email });

    if (!user) {
      const randomPassword = Math.random().toString(36).slice(-8);
      const hashedPassword = await bcrypt.hash(randomPassword, 10);

      user = await this.usersService.create({
        ...userData,
        password: hashedPassword,
      });
    }

    const access_token = await this.createJwtBearerToken(user);
    return { access_token, user };
  }
}
