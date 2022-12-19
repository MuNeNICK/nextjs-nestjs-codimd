import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class NotesAvgAggregateInput {

    @Field(() => Boolean, {nullable:true})
    viewcount?: true;
}
