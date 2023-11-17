import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { Logger, LoggerErrorInterceptor } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { bufferLogs: true });
  app.useLogger(app.get(Logger));
  app.useGlobalInterceptors(new LoggerErrorInterceptor());
  const logger = app.get(Logger);
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
