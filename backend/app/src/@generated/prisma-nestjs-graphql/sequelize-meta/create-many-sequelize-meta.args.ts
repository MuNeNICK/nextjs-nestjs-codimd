import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SequelizeMetaCreateManyInput } from './sequelize-meta-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManySequelizeMetaArgs {

    @Field(() => [SequelizeMetaCreateManyInput], {nullable:false})
    @Type(() => SequelizeMetaCreateManyInput)
    data!: Array<SequelizeMetaCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
