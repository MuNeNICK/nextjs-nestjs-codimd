import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SequelizeMetaWhereInput } from './sequelize-meta-where.input';
import { Type } from 'class-transformer';
import { SequelizeMetaOrderByWithRelationInput } from './sequelize-meta-order-by-with-relation.input';
import { SequelizeMetaWhereUniqueInput } from './sequelize-meta-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SequelizeMetaScalarFieldEnum } from './sequelize-meta-scalar-field.enum';

@ArgsType()
export class FindManySequelizeMetaArgs {

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

    @Field(() => [SequelizeMetaScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SequelizeMetaScalarFieldEnum>;
}
