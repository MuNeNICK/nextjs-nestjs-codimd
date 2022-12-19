import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SequelizeMetaWhereInput } from './sequelize-meta-where.input';
import { Type } from 'class-transformer';
import { SequelizeMetaOrderByWithAggregationInput } from './sequelize-meta-order-by-with-aggregation.input';
import { SequelizeMetaScalarFieldEnum } from './sequelize-meta-scalar-field.enum';
import { SequelizeMetaScalarWhereWithAggregatesInput } from './sequelize-meta-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { SequelizeMetaCountAggregateInput } from './sequelize-meta-count-aggregate.input';
import { SequelizeMetaMinAggregateInput } from './sequelize-meta-min-aggregate.input';
import { SequelizeMetaMaxAggregateInput } from './sequelize-meta-max-aggregate.input';

@ArgsType()
export class SequelizeMetaGroupByArgs {

    @Field(() => SequelizeMetaWhereInput, {nullable:true})
    @Type(() => SequelizeMetaWhereInput)
    where?: SequelizeMetaWhereInput;

    @Field(() => [SequelizeMetaOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<SequelizeMetaOrderByWithAggregationInput>;

    @Field(() => [SequelizeMetaScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof SequelizeMetaScalarFieldEnum>;

    @Field(() => SequelizeMetaScalarWhereWithAggregatesInput, {nullable:true})
    having?: SequelizeMetaScalarWhereWithAggregatesInput;

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
