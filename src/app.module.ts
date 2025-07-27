import { AppController } from "@/app.controller";
import { AppService } from "@/app.service";
import { dbConfig } from "@/common/database/db.config";
import { HealthController } from "@/modules/health/health.controller";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './src/modules/auth/auth.module';
import { AuthModule } from './modules/auth/auth/auth.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(dbConfig), UsersModule, AuthModule],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
