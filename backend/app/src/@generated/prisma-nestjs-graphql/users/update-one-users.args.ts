import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsersUpdateInput } from './users-update.input';
import { Type } from 'class-transformer';
import { UsersWhereUniqueInput } from './users-where-unique.input';

@ArgsType()
export class UpdateOneUsersArgs {

    @Field(() => UsersUpdateInput, {nullable:false})
    @Type(() => UsersUpdateInput)
    data!: UsersUpdateInput;

    @Field(() => UsersWhereUniqueInput, {nullable:false})
    @Type(() => UsersWhereUniqueInput)
    where!: UsersWhereUniqueInput;
}
