import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { TokenGuard } from './guards/token.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(TokenGuard)
  getHello(): string {
    return this.appService.getHello();
  }
}
