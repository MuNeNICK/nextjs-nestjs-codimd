import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SequelizeMetaWhereUniqueInput } from './sequelize-meta-where-unique.input';
import { Type } from 'class-transformer';
import { SequelizeMetaCreateInput } from './sequelize-meta-create.input';
import { SequelizeMetaUpdateInput } from './sequelize-meta-update.input';

@ArgsType()
export class UpsertOneSequelizeMetaArgs {

    @Field(() => SequelizeMetaWhereUniqueInput, {nullable:false})
    @Type(() => SequelizeMetaWhereUniqueInput)
    where!: SequelizeMetaWhereUniqueInput;

    @Field(() => SequelizeMetaCreateInput, {nullable:false})
    @Type(() => SequelizeMetaCreateInput)
    create!: SequelizeMetaCreateInput;

    @Field(() => SequelizeMetaUpdateInput, {nullable:false})
    @Type(() => SequelizeMetaUpdateInput)
    update!: SequelizeMetaUpdateInput;
}
