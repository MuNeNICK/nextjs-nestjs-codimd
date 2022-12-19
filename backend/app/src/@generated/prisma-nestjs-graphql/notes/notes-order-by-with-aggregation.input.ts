import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { NotesCountOrderByAggregateInput } from './notes-count-order-by-aggregate.input';
import { NotesAvgOrderByAggregateInput } from './notes-avg-order-by-aggregate.input';
import { NotesMaxOrderByAggregateInput } from './notes-max-order-by-aggregate.input';
import { NotesMinOrderByAggregateInput } from './notes-min-order-by-aggregate.input';
import { NotesSumOrderByAggregateInput } from './notes-sum-order-by-aggregate.input';

@InputType()
export class NotesOrderByWithAggregationInput {

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

    @Field(() => NotesCountOrderByAggregateInput, {nullable:true})
    _count?: NotesCountOrderByAggregateInput;

    @Field(() => NotesAvgOrderByAggregateInput, {nullable:true})
    _avg?: NotesAvgOrderByAggregateInput;

    @Field(() => NotesMaxOrderByAggregateInput, {nullable:true})
    _max?: NotesMaxOrderByAggregateInput;

    @Field(() => NotesMinOrderByAggregateInput, {nullable:true})
    _min?: NotesMinOrderByAggregateInput;

    @Field(() => NotesSumOrderByAggregateInput, {nullable:true})
    _sum?: NotesSumOrderByAggregateInput;
}
