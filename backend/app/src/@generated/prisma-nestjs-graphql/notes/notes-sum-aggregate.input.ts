import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class NotesSumAggregateInput {

    @Field(() => Boolean, {nullable:true})
    viewcount?: true;
}
