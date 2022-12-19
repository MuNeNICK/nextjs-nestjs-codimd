import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SessionsWhereInput } from './sessions-where.input';
import { Type } from 'class-transformer';
import { SessionsOrderByWithAggregationInput } from './sessions-order-by-with-aggregation.input';
import { SessionsScalarFieldEnum } from './sessions-scalar-field.enum';
import { SessionsScalarWhereWithAggregatesInput } from './sessions-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SessionsCountAggregateInput } from './sessions-count-aggregate.input';
import { SessionsMinAggregateInput } from './sessions-min-aggregate.input';
import { SessionsMaxAggregateInput } from './sessions-max-aggregate.input';

@ArgsType()
export class SessionsGroupByArgs {

    @Field(() => SessionsWhereInput, {nullable:true})
    @Type(() => SessionsWhereInput)
    where?: SessionsWhereInput;

    @Field(() => [SessionsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SessionsOrderByWithAggregationInput>;

    @Field(() => [SessionsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SessionsScalarFieldEnum>;

    @Field(() => SessionsScalarWhereWithAggregatesInput, {nullable:true})
    having?: SessionsScalarWhereWithAggregatesInput;

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
