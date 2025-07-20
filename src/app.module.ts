import { AppController } from "@/app.controller";
import { AppService } from "@/app.service";
import { dbConfig } from "@/common/database/db.config";
import { HealthController } from "@/health/health.controller";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forRoot(dbConfig)],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
