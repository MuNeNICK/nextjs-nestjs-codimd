import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UsersCreateManyInput } from './users-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyUsersArgs {

    @Field(() => [UsersCreateManyInput], {nullable:false})
    @Type(() => UsersCreateManyInput)
    data!: Array<UsersCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
