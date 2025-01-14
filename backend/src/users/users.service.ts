import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from '@/prisma/prisma.service';
import { ApiException } from '@/common/exceptions/api.exception';
import { ErrorCode } from '@/common/exceptions/error-codes.enum';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(user: Prisma.UserCreateInput) {
    const existingUser = await this.findOne({
      email: user.email,
    });

    if (existingUser) {
      throw new ApiException(ErrorCode.USER_ALREADY_EXISTS, 400);
    }

    return this.prisma.user.create({
      data: user,
    });
  }

  async findOne(value: Prisma.UserWhereUniqueInput) {
    return this.prisma.user.findUnique({
      where: value,
    });
  }
}
