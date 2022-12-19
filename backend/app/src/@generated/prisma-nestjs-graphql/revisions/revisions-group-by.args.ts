import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RevisionsWhereInput } from './revisions-where.input';
import { Type } from 'class-transformer';
import { RevisionsOrderByWithAggregationInput } from './revisions-order-by-with-aggregation.input';
import { RevisionsScalarFieldEnum } from './revisions-scalar-field.enum';
import { RevisionsScalarWhereWithAggregatesInput } from './revisions-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { RevisionsCountAggregateInput } from './revisions-count-aggregate.input';
import { RevisionsAvgAggregateInput } from './revisions-avg-aggregate.input';
import { RevisionsSumAggregateInput } from './revisions-sum-aggregate.input';
import { RevisionsMinAggregateInput } from './revisions-min-aggregate.input';
import { RevisionsMaxAggregateInput } from './revisions-max-aggregate.input';

@ArgsType()
export class RevisionsGroupByArgs {

    @Field(() => RevisionsWhereInput, {nullable:true})
    @Type(() => RevisionsWhereInput)
    where?: RevisionsWhereInput;

    @Field(() => [RevisionsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<RevisionsOrderByWithAggregationInput>;

    @Field(() => [RevisionsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof RevisionsScalarFieldEnum>;

    @Field(() => RevisionsScalarWhereWithAggregatesInput, {nullable:true})
    having?: RevisionsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RevisionsCountAggregateInput, {nullable:true})
    _count?: RevisionsCountAggregateInput;

    @Field(() => RevisionsAvgAggregateInput, {nullable:true})
    _avg?: RevisionsAvgAggregateInput;

    @Field(() => RevisionsSumAggregateInput, {nullable:true})
    _sum?: RevisionsSumAggregateInput;

    @Field(() => RevisionsMinAggregateInput, {nullable:true})
    _min?: RevisionsMinAggregateInput;

    @Field(() => RevisionsMaxAggregateInput, {nullable:true})
    _max?: RevisionsMaxAggregateInput;
}
