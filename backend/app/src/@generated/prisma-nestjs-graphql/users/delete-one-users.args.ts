import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsersWhereUniqueInput } from './users-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneUsersArgs {

    @Field(() => UsersWhereUniqueInput, {nullable:false})
    @Type(() => UsersWhereUniqueInput)
    where!: UsersWhereUniqueInput;
}
