import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RevisionsCountAggregate } from './revisions-count-aggregate.output';
import { RevisionsAvgAggregate } from './revisions-avg-aggregate.output';
import { RevisionsSumAggregate } from './revisions-sum-aggregate.output';
import { RevisionsMinAggregate } from './revisions-min-aggregate.output';
import { RevisionsMaxAggregate } from './revisions-max-aggregate.output';

@ObjectType()
export class RevisionsGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    noteId?: string;

    @Field(() => String, {nullable:true})
    patch?: string;

    @Field(() => String, {nullable:true})
    lastContent?: string;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => Int, {nullable:true})
    length?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    authorship?: string;

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
