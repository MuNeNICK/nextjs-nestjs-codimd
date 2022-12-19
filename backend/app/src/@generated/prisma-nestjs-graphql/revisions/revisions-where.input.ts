import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class RevisionsWhereInput {

    @Field(() => [RevisionsWhereInput], {nullable:true})
    AND?: Array<RevisionsWhereInput>;

    @Field(() => [RevisionsWhereInput], {nullable:true})
    OR?: Array<RevisionsWhereInput>;

    @Field(() => [RevisionsWhereInput], {nullable:true})
    NOT?: Array<RevisionsWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    noteId?: UuidNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    patch?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    lastContent?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    content?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    length?: IntNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    authorship?: StringNullableFilter;
}
