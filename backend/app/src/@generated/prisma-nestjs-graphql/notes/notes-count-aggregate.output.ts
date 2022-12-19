import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class NotesCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    ownerId!: number;

    @Field(() => Int, {nullable:false})
    content!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    shortid!: number;

    @Field(() => Int, {nullable:false})
    permission!: number;

    @Field(() => Int, {nullable:false})
    viewcount!: number;

    @Field(() => Int, {nullable:false})
    lastchangeuserId!: number;

    @Field(() => Int, {nullable:false})
    lastchangeAt!: number;

    @Field(() => Int, {nullable:false})
    alias!: number;

    @Field(() => Int, {nullable:false})
    savedAt!: number;

    @Field(() => Int, {nullable:false})
    authorship!: number;

    @Field(() => Int, {nullable:false})
    deletedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
