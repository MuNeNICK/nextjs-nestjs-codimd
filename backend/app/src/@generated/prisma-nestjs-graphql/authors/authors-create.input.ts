import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AuthorsCreateInput {

    @Field(() => String, {nullable:true})
    color?: string;

    @Field(() => String, {nullable:true})
    noteId?: string;

    @Field(() => String, {nullable:true})
    userId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
