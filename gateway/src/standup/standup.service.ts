import { HttpException, Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { StandupDTO } from './dto/standup.dto';

@Injectable()
export class StandupService {
  constructor(
    @Inject('STANDUP_SERVICE') private readonly standupClient: ClientProxy,
  ) {}
  async createStandup(dto: StandupDTO) {
    const creationResult = await this.standupClient
      .send('create_standup', dto)
      .toPromise();

    if (creationResult === null) {
      throw new HttpException(null, 400);
    }
    return creationResult;
  }
}
