import { AstraModule } from '@cahllagerfeld/nestjs-astra';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DBConfig } from './environment/db.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AstraModule.forRootAsync({
      useClass: DBConfig,
    }),
    AstraModule.forFeature({ collection: 'standup', namespace: 'api' }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
