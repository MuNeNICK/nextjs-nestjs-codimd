import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { AuthorsCountAggregate } from './authors-count-aggregate.output';
import { AuthorsAvgAggregate } from './authors-avg-aggregate.output';
import { AuthorsSumAggregate } from './authors-sum-aggregate.output';
import { AuthorsMinAggregate } from './authors-min-aggregate.output';
import { AuthorsMaxAggregate } from './authors-max-aggregate.output';

@ObjectType()
export class AggregateAuthors {

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
