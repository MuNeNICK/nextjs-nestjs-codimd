import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RevisionsWhereInput } from './revisions-where.input';
import { Type } from 'class-transformer';
import { RevisionsOrderByWithRelationInput } from './revisions-order-by-with-relation.input';
import { RevisionsWhereUniqueInput } from './revisions-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RevisionsCountAggregateInput } from './revisions-count-aggregate.input';
import { RevisionsAvgAggregateInput } from './revisions-avg-aggregate.input';
import { RevisionsSumAggregateInput } from './revisions-sum-aggregate.input';
import { RevisionsMinAggregateInput } from './revisions-min-aggregate.input';
import { RevisionsMaxAggregateInput } from './revisions-max-aggregate.input';

@ArgsType()
export class RevisionsAggregateArgs {

    @Field(() => RevisionsWhereInput, {nullable:true})
    @Type(() => RevisionsWhereInput)
    where?: RevisionsWhereInput;

    @Field(() => [RevisionsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RevisionsOrderByWithRelationInput>;

    @Field(() => RevisionsWhereUniqueInput, {nullable:true})
    cursor?: RevisionsWhereUniqueInput;

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
