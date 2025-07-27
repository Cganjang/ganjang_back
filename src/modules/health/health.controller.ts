import { Controller, Get, InternalServerErrorException } from "@nestjs/common";

@Controller("health")
export class HealthController {
  @Get()
  checkHealth() {
    return "ok";
  }

  @Get("details")
  checkHealthDetails() {
    return {
      status: "ok",
      uptime: process.uptime(),
    };
  }

  @Get("error")
  checkError() {
    throw new InternalServerErrorException("서버 에러 테스트");
  }
}
