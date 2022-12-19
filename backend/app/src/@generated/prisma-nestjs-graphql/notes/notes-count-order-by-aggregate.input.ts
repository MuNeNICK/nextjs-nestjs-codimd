import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class NotesCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ownerId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    shortid?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    permission?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    viewcount?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastchangeuserId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastchangeAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    alias?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    savedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    authorship?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    deletedAt?: keyof typeof SortOrder;
}
