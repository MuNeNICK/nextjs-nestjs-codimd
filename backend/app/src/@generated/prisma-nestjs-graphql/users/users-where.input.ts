import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';

@InputType()
export class UsersWhereInput {

    @Field(() => [UsersWhereInput], {nullable:true})
    AND?: Array<UsersWhereInput>;

    @Field(() => [UsersWhereInput], {nullable:true})
    OR?: Array<UsersWhereInput>;

    @Field(() => [UsersWhereInput], {nullable:true})
    NOT?: Array<UsersWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    profileid?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    profile?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    history?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    accessToken?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    refreshToken?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    email?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    password?: StringNullableFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    deleteToken?: UuidNullableFilter;
}
