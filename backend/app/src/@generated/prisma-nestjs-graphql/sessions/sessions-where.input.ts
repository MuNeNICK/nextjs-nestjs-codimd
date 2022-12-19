import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { Type } from 'class-transformer';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class SessionsWhereInput {

    @Field(() => [SessionsWhereInput], {nullable:true})
    AND?: Array<SessionsWhereInput>;

    @Field(() => [SessionsWhereInput], {nullable:true})
    OR?: Array<SessionsWhereInput>;

    @Field(() => [SessionsWhereInput], {nullable:true})
    NOT?: Array<SessionsWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    sid?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    expires?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    @Type(() => StringNullableFilter)
    data?: StringNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;
}
