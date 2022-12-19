import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AuthorsCountOrderByAggregateInput } from './authors-count-order-by-aggregate.input';
import { AuthorsAvgOrderByAggregateInput } from './authors-avg-order-by-aggregate.input';
import { AuthorsMaxOrderByAggregateInput } from './authors-max-order-by-aggregate.input';
import { AuthorsMinOrderByAggregateInput } from './authors-min-order-by-aggregate.input';
import { AuthorsSumOrderByAggregateInput } from './authors-sum-order-by-aggregate.input';

@InputType()
export class AuthorsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    color?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    noteId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    userId?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: keyof typeof SortOrder;

    @Field(() => AuthorsCountOrderByAggregateInput, {nullable:true})
    _count?: AuthorsCountOrderByAggregateInput;

    @Field(() => AuthorsAvgOrderByAggregateInput, {nullable:true})
    _avg?: AuthorsAvgOrderByAggregateInput;

    @Field(() => AuthorsMaxOrderByAggregateInput, {nullable:true})
    _max?: AuthorsMaxOrderByAggregateInput;

    @Field(() => AuthorsMinOrderByAggregateInput, {nullable:true})
    _min?: AuthorsMinOrderByAggregateInput;

    @Field(() => AuthorsSumOrderByAggregateInput, {nullable:true})
    _sum?: AuthorsSumOrderByAggregateInput;
}
