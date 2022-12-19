import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { Type } from 'class-transformer';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class SessionsScalarWhereWithAggregatesInput {

    @Field(() => [SessionsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SessionsScalarWhereWithAggregatesInput>;

    @Field(() => [SessionsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SessionsScalarWhereWithAggregatesInput>;

    @Field(() => [SessionsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SessionsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    sid?: StringWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    expires?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    @Type(() => StringNullableWithAggregatesFilter)
    data?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
