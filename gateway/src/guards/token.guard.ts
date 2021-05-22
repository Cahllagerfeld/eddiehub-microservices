import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class TokenGuard implements CanActivate {
  constructor(
    @Inject('AUTH_SERVICE') private readonly AuthServiceClient: ClientProxy,
  ) {}
  async canActivate(ctx: ExecutionContext): Promise<boolean> {
    const request: Request = ctx.switchToHttp().getRequest();
    const token = request.headers['client-token'];
    if (!token) {
      throw new UnauthorizedException();
    }
    const validationResponse = await this.AuthServiceClient.send<boolean>(
      'validate_token',
      token,
    ).toPromise();

    if (!validationResponse) {
      throw new UnauthorizedException();
    }
    return true;
  }
}
