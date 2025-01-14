import { Module } from '@nestjs/common';
import { MeController } from './me.controller';
import { AuthService } from '@/auth/auth.service';
import { UsersService } from '@/users/users.service';
import { AuthModule } from '@/auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [MeController],
  providers: [AuthService, UsersService],
})
export class MeModule {}
