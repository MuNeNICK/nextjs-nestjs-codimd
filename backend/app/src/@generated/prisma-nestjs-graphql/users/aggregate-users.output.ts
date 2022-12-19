import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UsersCountAggregate } from './users-count-aggregate.output';
import { UsersMinAggregate } from './users-min-aggregate.output';
import { UsersMaxAggregate } from './users-max-aggregate.output';

@ObjectType()
export class AggregateUsers {

    @Field(() => UsersCountAggregate, {nullable:true})
    _count?: UsersCountAggregate;

    @Field(() => UsersMinAggregate, {nullable:true})
    _min?: UsersMinAggregate;

    @Field(() => UsersMaxAggregate, {nullable:true})
    _max?: UsersMaxAggregate;
}
