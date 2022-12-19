import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SequelizeMetaCountOrderByAggregateInput } from './sequelize-meta-count-order-by-aggregate.input';
import { SequelizeMetaMaxOrderByAggregateInput } from './sequelize-meta-max-order-by-aggregate.input';
import { SequelizeMetaMinOrderByAggregateInput } from './sequelize-meta-min-order-by-aggregate.input';

@InputType()
export class SequelizeMetaOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SequelizeMetaCountOrderByAggregateInput, {nullable:true})
    _count?: SequelizeMetaCountOrderByAggregateInput;

    @Field(() => SequelizeMetaMaxOrderByAggregateInput, {nullable:true})
    _max?: SequelizeMetaMaxOrderByAggregateInput;

    @Field(() => SequelizeMetaMinOrderByAggregateInput, {nullable:true})
    _min?: SequelizeMetaMinOrderByAggregateInput;
}
