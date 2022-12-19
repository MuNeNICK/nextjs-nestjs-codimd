import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsersWhereInput } from './users-where.input';
import { Type } from 'class-transformer';
import { UsersOrderByWithAggregationInput } from './users-order-by-with-aggregation.input';
import { UsersScalarFieldEnum } from './users-scalar-field.enum';
import { UsersScalarWhereWithAggregatesInput } from './users-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { UsersCountAggregateInput } from './users-count-aggregate.input';
import { UsersMinAggregateInput } from './users-min-aggregate.input';
import { UsersMaxAggregateInput } from './users-max-aggregate.input';

@ArgsType()
export class UsersGroupByArgs {

    @Field(() => UsersWhereInput, {nullable:true})
    @Type(() => UsersWhereInput)
    where?: UsersWhereInput;

    @Field(() => [UsersOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<UsersOrderByWithAggregationInput>;

    @Field(() => [UsersScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof UsersScalarFieldEnum>;

    @Field(() => UsersScalarWhereWithAggregatesInput, {nullable:true})
    having?: UsersScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => UsersCountAggregateInput, {nullable:true})
    _count?: UsersCountAggregateInput;

    @Field(() => UsersMinAggregateInput, {nullable:true})
    _min?: UsersMinAggregateInput;

    @Field(() => UsersMaxAggregateInput, {nullable:true})
    _max?: UsersMaxAggregateInput;
}
