import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SessionsWhereUniqueInput {

    @Field(() => String, {nullable:true})
    sid?: string;
}
