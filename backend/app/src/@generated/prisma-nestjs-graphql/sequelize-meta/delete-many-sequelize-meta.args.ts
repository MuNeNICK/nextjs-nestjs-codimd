import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SequelizeMetaWhereInput } from './sequelize-meta-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManySequelizeMetaArgs {

    @Field(() => SequelizeMetaWhereInput, {nullable:true})
    @Type(() => SequelizeMetaWhereInput)
    where?: SequelizeMetaWhereInput;
}
