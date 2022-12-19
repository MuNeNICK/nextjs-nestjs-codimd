import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class NotesCountAggregateInput {

    @Field(() => Boolean, {nullable:true})
    id?: true;

    @Field(() => Boolean, {nullable:true})
    ownerId?: true;

    @Field(() => Boolean, {nullable:true})
    content?: true;

    @Field(() => Boolean, {nullable:true})
    title?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;

    @Field(() => Boolean, {nullable:true})
    shortid?: true;

    @Field(() => Boolean, {nullable:true})
    permission?: true;

    @Field(() => Boolean, {nullable:true})
    viewcount?: true;

    @Field(() => Boolean, {nullable:true})
    lastchangeuserId?: true;

    @Field(() => Boolean, {nullable:true})
    lastchangeAt?: true;

    @Field(() => Boolean, {nullable:true})
    alias?: true;

    @Field(() => Boolean, {nullable:true})
    savedAt?: true;

    @Field(() => Boolean, {nullable:true})
    authorship?: true;

    @Field(() => Boolean, {nullable:true})
    deletedAt?: true;

    @Field(() => Boolean, {nullable:true})
    _all?: true;
}
