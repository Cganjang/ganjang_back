import { AppController } from "@/app.controller";
import { AppService } from "@/app.service";
import { dbConfig } from "@/common/database/db.config";
import { HealthController } from "@/modules/health/health.controller";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [TypeOrmModule.forRoot(dbConfig), UsersModule],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
