import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SequelizeMetaWhereInput } from './sequelize-meta-where.input';
import { Type } from 'class-transformer';
import { SequelizeMetaOrderByWithRelationInput } from './sequelize-meta-order-by-with-relation.input';
import { SequelizeMetaWhereUniqueInput } from './sequelize-meta-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SequelizeMetaCountAggregateInput } from './sequelize-meta-count-aggregate.input';
import { SequelizeMetaMinAggregateInput } from './sequelize-meta-min-aggregate.input';
import { SequelizeMetaMaxAggregateInput } from './sequelize-meta-max-aggregate.input';

@ArgsType()
export class SequelizeMetaAggregateArgs {

    @Field(() => SequelizeMetaWhereInput, {nullable:true})
    @Type(() => SequelizeMetaWhereInput)
    where?: SequelizeMetaWhereInput;

    @Field(() => [SequelizeMetaOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SequelizeMetaOrderByWithRelationInput>;

    @Field(() => SequelizeMetaWhereUniqueInput, {nullable:true})
    cursor?: SequelizeMetaWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => SequelizeMetaCountAggregateInput, {nullable:true})
    _count?: SequelizeMetaCountAggregateInput;

    @Field(() => SequelizeMetaMinAggregateInput, {nullable:true})
    _min?: SequelizeMetaMinAggregateInput;

    @Field(() => SequelizeMetaMaxAggregateInput, {nullable:true})
    _max?: SequelizeMetaMaxAggregateInput;
}
