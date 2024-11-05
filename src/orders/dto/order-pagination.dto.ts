import { IsEnum, IsOptional } from 'class-validator';
import { OrderStatus, OrderStatusList } from 'src/orders/enum/order.enum';
import { PaginationDto } from '../../common/dto/pagination.dto';

export class OrderPaginationDto extends PaginationDto {
  @IsOptional()
  @IsEnum(OrderStatusList, {
    message: `Valid status are ${OrderStatusList}`,
  })
  status: OrderStatus;
}
