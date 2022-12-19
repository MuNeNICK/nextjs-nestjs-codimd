import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RevisionsCountAggregate } from './revisions-count-aggregate.output';
import { RevisionsAvgAggregate } from './revisions-avg-aggregate.output';
import { RevisionsSumAggregate } from './revisions-sum-aggregate.output';
import { RevisionsMinAggregate } from './revisions-min-aggregate.output';
import { RevisionsMaxAggregate } from './revisions-max-aggregate.output';

@ObjectType()
export class AggregateRevisions {

    @Field(() => RevisionsCountAggregate, {nullable:true})
    _count?: RevisionsCountAggregate;

    @Field(() => RevisionsAvgAggregate, {nullable:true})
    _avg?: RevisionsAvgAggregate;

    @Field(() => RevisionsSumAggregate, {nullable:true})
    _sum?: RevisionsSumAggregate;

    @Field(() => RevisionsMinAggregate, {nullable:true})
    _min?: RevisionsMinAggregate;

    @Field(() => RevisionsMaxAggregate, {nullable:true})
    _max?: RevisionsMaxAggregate;
}
