import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsersWhereInput } from './users-where.input';
import { Type } from 'class-transformer';
import { UsersOrderByWithRelationInput } from './users-order-by-with-relation.input';
import { UsersWhereUniqueInput } from './users-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UsersCountAggregateInput } from './users-count-aggregate.input';
import { UsersMinAggregateInput } from './users-min-aggregate.input';
import { UsersMaxAggregateInput } from './users-max-aggregate.input';

@ArgsType()
export class UsersAggregateArgs {

    @Field(() => UsersWhereInput, {nullable:true})
    @Type(() => UsersWhereInput)
    where?: UsersWhereInput;

    @Field(() => [UsersOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<UsersOrderByWithRelationInput>;

    @Field(() => UsersWhereUniqueInput, {nullable:true})
    cursor?: UsersWhereUniqueInput;

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
