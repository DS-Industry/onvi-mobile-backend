import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HhModule } from './hh/hh.module';
import { AuthModule } from './auth/auth.module';
import { ClientModule } from './client/client.module';
import { CardModule } from './card/card.module';
import { PaymentModule } from './payment/payment.module';
import { OrderModule } from './order/order.module';
import { ClientModule } from './client/client.module';
import { CardModule } from './card/card.module';
import { ResouecesModule } from './card/resoueces/resoueces.module';
import { OrderModule } from './order/order.module';
import { PaymentModule } from './payment/payment.module';
import { CardModule } from './card/card.module';

@Module({
  imports: [HhModule, AuthModule, ClientModule, CardModule, OrderModule, PaymentModule, ResouecesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
