import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Revisions {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    noteId!: string | null;

    @Field(() => String, {nullable:true})
    patch!: string | null;

    @Field(() => String, {nullable:true})
    lastContent!: string | null;

    @Field(() => String, {nullable:true})
    content!: string | null;

    @Field(() => Int, {nullable:true})
    length!: number | null;

    @Field(() => Date, {nullable:true})
    createdAt!: Date | null;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => String, {nullable:true})
    authorship!: string | null;
}
