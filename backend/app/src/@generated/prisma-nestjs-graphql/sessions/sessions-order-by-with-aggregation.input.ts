import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SessionsCountOrderByAggregateInput } from './sessions-count-order-by-aggregate.input';
import { SessionsMaxOrderByAggregateInput } from './sessions-max-order-by-aggregate.input';
import { SessionsMinOrderByAggregateInput } from './sessions-min-order-by-aggregate.input';

@InputType()
export class SessionsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    sid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    expires?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    data?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SessionsCountOrderByAggregateInput, {nullable:true})
    _count?: SessionsCountOrderByAggregateInput;

    @Field(() => SessionsMaxOrderByAggregateInput, {nullable:true})
    _max?: SessionsMaxOrderByAggregateInput;

    @Field(() => SessionsMinOrderByAggregateInput, {nullable:true})
    _min?: SessionsMinOrderByAggregateInput;
}
