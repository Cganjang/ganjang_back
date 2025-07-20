import { AppController } from "@/app.controller";
import { AppService } from "@/app.service";
import { HealthController } from "@/health/health.controller";
import { Module } from "@nestjs/common";

@Module({
  imports: [],
  controllers: [AppController, HealthController],
  providers: [AppService],
})
export class AppModule {}
