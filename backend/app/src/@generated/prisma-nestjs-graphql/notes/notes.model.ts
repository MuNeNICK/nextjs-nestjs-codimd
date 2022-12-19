import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { enum_Notes_permission } from '../prisma/enum-notes-permission.enum';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Notes {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    ownerId!: string | null;

    @Field(() => String, {nullable:true})
    content!: string | null;

    @Field(() => String, {nullable:true})
    title!: string | null;

    @Field(() => Date, {nullable:true})
    createdAt!: Date | null;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => String, {nullable:false,defaultValue:'0000000000'})
    shortid!: string;

    @Field(() => enum_Notes_permission, {nullable:true})
    permission!: keyof typeof enum_Notes_permission | null;

    @Field(() => Int, {nullable:true,defaultValue:0})
    viewcount!: number | null;

    @Field(() => String, {nullable:true})
    lastchangeuserId!: string | null;

    @Field(() => Date, {nullable:true})
    lastchangeAt!: Date | null;

    @Field(() => String, {nullable:true})
    alias!: string | null;

    @Field(() => Date, {nullable:true})
    savedAt!: Date | null;

    @Field(() => String, {nullable:true})
    authorship!: string | null;

    @Field(() => Date, {nullable:true})
    deletedAt!: Date | null;
}
