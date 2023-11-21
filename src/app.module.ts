import { Module } from '@nestjs/common';
import { AuthModule } from '@auth/auth.module';
import { ClientModule } from '@client/client.module';
import { CardModule } from '@card/card.module';
import { OrderModule } from '@order/order.module';
import { PaymentModule } from '@payment/payment.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configuration } from '@config/configuration';
import { KnexModule } from 'nest-knexjs';
import { LoggerModule } from 'nestjs-pino';
import * as process from 'process';
import { APP_FILTER } from "@nestjs/core";
import { AllExceptionsFilter } from "./common/filters/exception.filter";

@Module({
  imports: [
    LoggerModule.forRoot({
      pinoHttp:
        process.env.NODE_ENV === 'development'
          ? {
              customProps: (req, res) => ({
                context: 'HTTP',
              }),
              transport: {
                dedupe: true,
                targets: [
                  {
                    target: 'pino/file',
                    options: {
                      destination: './logs',
                      mkdir: true,
                    },
                  },
                ],
              },
            }
          : {
              customProps: (req, res) => ({
                context: 'HTTP',
              }),
              transport: {
                dedupe: true,
                targets: [
                  {
                    target: 'pino-pretty',
                    options: {
                      singleLine: true,
                    },
                    level: '',
                  },
                ],
              },
            },
    }),
    ConfigModule.forRoot({
      envFilePath: `config/env/.env.${process.env.NODE_ENV}`,
      load: [configuration],
      isGlobal: true,
    }),
    KnexModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        config: {
          client: 'oracledb',
          connection: {
            user: configService.get<string>('db.username'),
            password: configService.get<string>('db.password'),
            connectString: configService.get<string>('db.connectionString'),
          },
        },
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    ClientModule,
    CardModule,
    OrderModule,
    PaymentModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule {}
