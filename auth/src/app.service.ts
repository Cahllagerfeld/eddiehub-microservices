import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private readonly config: ConfigService) {}
  validateToken(token: string) {
    const approvedTokens: Array<string> = this.config
      .get('APPROVED_TOKENS')
      .split(',');
    if (!approvedTokens.includes(token)) {
      return false;
    }
    return true;
  }
}
