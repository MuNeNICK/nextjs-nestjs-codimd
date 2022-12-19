import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { enum_Notes_permission } from '../prisma/enum-notes-permission.enum';
import { Int } from '@nestjs/graphql';

@InputType()
export class NotesUncheckedCreateInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    ownerId?: string;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    shortid?: string;

    @Field(() => enum_Notes_permission, {nullable:true})
    permission?: keyof typeof enum_Notes_permission;

    @Field(() => Int, {nullable:true})
    viewcount?: number;

    @Field(() => String, {nullable:true})
    lastchangeuserId?: string;

    @Field(() => Date, {nullable:true})
    lastchangeAt?: Date | string;

    @Field(() => String, {nullable:true})
    alias?: string;

    @Field(() => Date, {nullable:true})
    savedAt?: Date | string;

    @Field(() => String, {nullable:true})
    authorship?: string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;
}
