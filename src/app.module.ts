import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { dbConfig } from '@/common/database/db.config';
import { HealthController } from '@/modules/health/health.controller';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StaffModule } from './modules/staff/staff.module';
import { AuthModule } from './modules/auth/auth.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [TypeOrmModule.forRoot(dbConfig), StaffModule, AuthModule, AdminModule],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
