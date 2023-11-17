import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const logger = new Logger('main');
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  const PORT = configService.get<number>('port');
  const environment = configService.get<string>('NODE_ENV');
  const appName = configService.get<string>('appName');
  await app.listen(PORT);

  logger.log(
    `Environment - [${environment.toUpperCase()}], Application ${appName} ready to receive request in PORT - ${PORT}`,
  );

  logger.log(
    `Connection string - ${configService.get<string>('db.connectionString')}`,
  );
}
bootstrap();
