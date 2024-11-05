import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { NastModule } from 'src/tranports/nast.module';

@Module({
  controllers: [OrdersController],
  imports: [NastModule],
})
export class OrdersModule {}