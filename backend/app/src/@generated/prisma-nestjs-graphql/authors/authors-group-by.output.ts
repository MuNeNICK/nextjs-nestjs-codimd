import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AuthorsCountAggregate } from './authors-count-aggregate.output';
import { AuthorsAvgAggregate } from './authors-avg-aggregate.output';
import { AuthorsSumAggregate } from './authors-sum-aggregate.output';
import { AuthorsMinAggregate } from './authors-min-aggregate.output';
import { AuthorsMaxAggregate } from './authors-max-aggregate.output';

@ObjectType()
export class AuthorsGroupBy {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    color?: string;

    @Field(() => String, {nullable:true})
    noteId?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => AuthorsCountAggregate, {nullable:true})
    _count?: AuthorsCountAggregate;

    @Field(() => AuthorsAvgAggregate, {nullable:true})
    _avg?: AuthorsAvgAggregate;

    @Field(() => AuthorsSumAggregate, {nullable:true})
    _sum?: AuthorsSumAggregate;

    @Field(() => AuthorsMinAggregate, {nullable:true})
    _min?: AuthorsMinAggregate;

    @Field(() => AuthorsMaxAggregate, {nullable:true})
    _max?: AuthorsMaxAggregate;
}
