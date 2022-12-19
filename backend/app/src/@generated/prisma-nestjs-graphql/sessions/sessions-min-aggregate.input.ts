import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SessionsMinAggregateInput {

    @Field(() => Boolean, {nullable:true})
    sid?: true;

    @Field(() => Boolean, {nullable:true})
    expires?: true;

    @Field(() => Boolean, {nullable:true})
    data?: true;

    @Field(() => Boolean, {nullable:true})
    createdAt?: true;

    @Field(() => Boolean, {nullable:true})
    updatedAt?: true;
}
