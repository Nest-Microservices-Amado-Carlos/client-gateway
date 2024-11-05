import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { NastModule } from 'src/tranports/nast.module';

@Module({
  controllers: [ProductsController],
  providers: [],
  imports: [
    NastModule,
    // ClientsModule.register([
    //   {
    //     name: NATS_SERVICE,
    //     transport: Transport.NATS,
    //     options: {
    //       servers: envs.natsServers,
    //     },
    //   },
    // ]),
  ],
})
export class ProductsModule {}
