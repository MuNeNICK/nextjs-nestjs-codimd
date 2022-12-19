import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { RevisionsCountOrderByAggregateInput } from './revisions-count-order-by-aggregate.input';
import { RevisionsAvgOrderByAggregateInput } from './revisions-avg-order-by-aggregate.input';
import { RevisionsMaxOrderByAggregateInput } from './revisions-max-order-by-aggregate.input';
import { RevisionsMinOrderByAggregateInput } from './revisions-min-order-by-aggregate.input';
import { RevisionsSumOrderByAggregateInput } from './revisions-sum-order-by-aggregate.input';

@InputType()
export class RevisionsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    noteId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    patch?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    lastContent?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    content?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    length?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    authorship?: keyof typeof SortOrder;

    @Field(() => RevisionsCountOrderByAggregateInput, {nullable:true})
    _count?: RevisionsCountOrderByAggregateInput;

    @Field(() => RevisionsAvgOrderByAggregateInput, {nullable:true})
    _avg?: RevisionsAvgOrderByAggregateInput;

    @Field(() => RevisionsMaxOrderByAggregateInput, {nullable:true})
    _max?: RevisionsMaxOrderByAggregateInput;

    @Field(() => RevisionsMinOrderByAggregateInput, {nullable:true})
    _min?: RevisionsMinOrderByAggregateInput;

    @Field(() => RevisionsSumOrderByAggregateInput, {nullable:true})
    _sum?: RevisionsSumOrderByAggregateInput;
}
