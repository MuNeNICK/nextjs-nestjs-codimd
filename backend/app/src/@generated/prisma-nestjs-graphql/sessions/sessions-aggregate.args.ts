import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SessionsWhereInput } from './sessions-where.input';
import { Type } from 'class-transformer';
import { SessionsOrderByWithRelationInput } from './sessions-order-by-with-relation.input';
import { SessionsWhereUniqueInput } from './sessions-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SessionsCountAggregateInput } from './sessions-count-aggregate.input';
import { SessionsMinAggregateInput } from './sessions-min-aggregate.input';
import { SessionsMaxAggregateInput } from './sessions-max-aggregate.input';

@ArgsType()
export class SessionsAggregateArgs {

    @Field(() => SessionsWhereInput, {nullable:true})
    @Type(() => SessionsWhereInput)
    where?: SessionsWhereInput;

    @Field(() => [SessionsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SessionsOrderByWithRelationInput>;

    @Field(() => SessionsWhereUniqueInput, {nullable:true})
    cursor?: SessionsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SessionsCountAggregateInput, {nullable:true})
    _count?: SessionsCountAggregateInput;

    @Field(() => SessionsMinAggregateInput, {nullable:true})
    _min?: SessionsMinAggregateInput;

    @Field(() => SessionsMaxAggregateInput, {nullable:true})
    _max?: SessionsMaxAggregateInput;
}
