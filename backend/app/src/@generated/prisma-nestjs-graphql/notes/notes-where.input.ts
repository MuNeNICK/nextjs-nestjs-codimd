import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { Enumenum_Notes_permissionNullableFilter } from '../prisma/enumenum-notes-permission-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class NotesWhereInput {

    @Field(() => [NotesWhereInput], {nullable:true})
    AND?: Array<NotesWhereInput>;

    @Field(() => [NotesWhereInput], {nullable:true})
    OR?: Array<NotesWhereInput>;

    @Field(() => [NotesWhereInput], {nullable:true})
    NOT?: Array<NotesWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    ownerId?: UuidNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    content?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    title?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    createdAt?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    updatedAt?: DateTimeNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    shortid?: StringFilter;

    @Field(() => Enumenum_Notes_permissionNullableFilter, {nullable:true})
    permission?: Enumenum_Notes_permissionNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    viewcount?: IntNullableFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    lastchangeuserId?: UuidNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    lastchangeAt?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    alias?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    savedAt?: DateTimeNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    authorship?: StringNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    deletedAt?: DateTimeNullableFilter;
}
