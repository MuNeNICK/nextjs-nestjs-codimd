import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SequelizeMetaUpdateInput } from './sequelize-meta-update.input';
import { Type } from 'class-transformer';
import { SequelizeMetaWhereUniqueInput } from './sequelize-meta-where-unique.input';

@ArgsType()
export class UpdateOneSequelizeMetaArgs {

    @Field(() => SequelizeMetaUpdateInput, {nullable:false})
    @Type(() => SequelizeMetaUpdateInput)
    data!: SequelizeMetaUpdateInput;

    @Field(() => SequelizeMetaWhereUniqueInput, {nullable:false})
    @Type(() => SequelizeMetaWhereUniqueInput)
    where!: SequelizeMetaWhereUniqueInput;
}
