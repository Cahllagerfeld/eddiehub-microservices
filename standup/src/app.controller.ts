import { Controller, Get } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { StandupDTO } from './dto/standup.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('create_standup')
  createStandup(standup: StandupDTO) {
    return this.appService.createStandup(standup);
  }

  @MessagePattern('update_standup')
  updateStandup() {}

  @MessagePattern('get_single_standup')
  getOneStandup() {}

  @MessagePattern('get_all_standups')
  getstandups() {}

  @MessagePattern('delete_standup')
  deleteStandup() {}
}
