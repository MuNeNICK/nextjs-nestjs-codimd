import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SequelizeMetaCountAggregate } from './sequelize-meta-count-aggregate.output';
import { SequelizeMetaMinAggregate } from './sequelize-meta-min-aggregate.output';
import { SequelizeMetaMaxAggregate } from './sequelize-meta-max-aggregate.output';

@ObjectType()
export class AggregateSequelizeMeta {

    @Field(() => SequelizeMetaCountAggregate, {nullable:true})
    _count?: SequelizeMetaCountAggregate;

    @Field(() => SequelizeMetaMinAggregate, {nullable:true})
    _min?: SequelizeMetaMinAggregate;

    @Field(() => SequelizeMetaMaxAggregate, {nullable:true})
    _max?: SequelizeMetaMaxAggregate;
}
