import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SequelizeMetaWhereUniqueInput } from './sequelize-meta-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueSequelizeMetaArgs {

    @Field(() => SequelizeMetaWhereUniqueInput, {nullable:false})
    @Type(() => SequelizeMetaWhereUniqueInput)
    where!: SequelizeMetaWhereUniqueInput;
}
