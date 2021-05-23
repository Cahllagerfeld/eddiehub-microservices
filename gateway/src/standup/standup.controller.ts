import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { TokenGuard } from '../guards/token.guard';
import { StandupDTO } from './dto/standup.dto';
import { StandupService } from './standup.service';

@Controller('standup')
export class StandupController {
  constructor(private readonly service: StandupService) {}
  @Post()
  @UseGuards(TokenGuard)
  createStandup(@Body() stanupDto: StandupDTO) {
    return this.service.createStandup(stanupDto);
  }
}
