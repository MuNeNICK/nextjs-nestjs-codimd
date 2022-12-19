import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class SequelizeMetaOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;
}
