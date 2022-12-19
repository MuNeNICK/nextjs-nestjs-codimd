import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';

@InputType()
export class AuthorsWhereInput {

    @Field(() => [AuthorsWhereInput], {nullable:true})
    AND?: Array<AuthorsWhereInput>;

    @Field(() => [AuthorsWhereInput], {nullable:true})
    OR?: Array<AuthorsWhereInput>;

    @Field(() => [AuthorsWhereInput], {nullable:true})
    NOT?: Array<AuthorsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    color?: StringNullableFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    noteId?: UuidNullableFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    userId?: UuidNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;
}
