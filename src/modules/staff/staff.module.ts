import { Module } from '@nestjs/common';
import { StaffService } from './staff.service';
import { StaffController } from './staff.controller';
import { StaffRepository } from '@/modules/staff/staff.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StaffEntity } from '@/modules/staff/entities/staff.entity';
import { AuthModule } from '@/modules/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([StaffEntity]), AuthModule],
  controllers: [StaffController],
  providers: [StaffService, StaffRepository],
  exports: [StaffRepository],
})
export class StaffModule {}
