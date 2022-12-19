import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class NotesSumOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    viewcount?: keyof typeof SortOrder;
}
