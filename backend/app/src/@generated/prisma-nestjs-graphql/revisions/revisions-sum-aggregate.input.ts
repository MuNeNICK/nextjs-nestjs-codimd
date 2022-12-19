import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class RevisionsSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    length?: true;
}
