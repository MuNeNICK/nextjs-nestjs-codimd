import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SequelizeMetaUpdateManyMutationInput } from './sequelize-meta-update-many-mutation.input';
import { Type } from 'class-transformer';
import { SequelizeMetaWhereInput } from './sequelize-meta-where.input';

@ArgsType()
export class UpdateManySequelizeMetaArgs {

    @Field(() => SequelizeMetaUpdateManyMutationInput, {nullable:false})
    @Type(() => SequelizeMetaUpdateManyMutationInput)
    data!: SequelizeMetaUpdateManyMutationInput;

    @Field(() => SequelizeMetaWhereInput, {nullable:true})
    @Type(() => SequelizeMetaWhereInput)
    where?: SequelizeMetaWhereInput;
}
