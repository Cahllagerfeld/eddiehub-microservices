import { AstraService } from '@cahllagerfeld/nestjs-astra';
import { Injectable } from '@nestjs/common';
import { StandupDTO } from './dto/standup.dto';
import { Standup } from './interfaces/standup.interface';

@Injectable()
export class AppService {
  constructor(private readonly astra: AstraService) {}
  createStandup(standupDto: StandupDTO) {
    const { author, todayMessage, yesterdayMessage } = standupDto;

    const newStandup: Standup = {
      yesterdayMessage: yesterdayMessage,
      todayMessage: todayMessage,
      author: { ...author },
      createdOn: new Date(Date.now()),
    };

    return this.astra.create<Standup>(newStandup);
  }
}
