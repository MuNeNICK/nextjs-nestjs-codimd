import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SequelizeMetaCreateInput } from './sequelize-meta-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneSequelizeMetaArgs {

    @Field(() => SequelizeMetaCreateInput, {nullable:false})
    @Type(() => SequelizeMetaCreateInput)
    @ValidateNested()
    @Type(() => SequelizeMetaCreateInput)
    data!: SequelizeMetaCreateInput;
}
