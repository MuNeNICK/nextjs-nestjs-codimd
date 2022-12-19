import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SessionsCountAggregate } from './sessions-count-aggregate.output';
import { SessionsMinAggregate } from './sessions-min-aggregate.output';
import { SessionsMaxAggregate } from './sessions-max-aggregate.output';

@ObjectType()
export class AggregateSessions {

    @Field(() => SessionsCountAggregate, {nullable:true})
    _count?: SessionsCountAggregate;

    @Field(() => SessionsMinAggregate, {nullable:true})
    _min?: SessionsMinAggregate;

    @Field(() => SessionsMaxAggregate, {nullable:true})
    _max?: SessionsMaxAggregate;
}
