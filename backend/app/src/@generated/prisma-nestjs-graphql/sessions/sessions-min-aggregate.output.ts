import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SessionsMinAggregate {

    @Field(() => String, {nullable:true})
    sid?: string;

    @Field(() => Date, {nullable:true})
    expires?: Date | string;

    @Field(() => String, {nullable:true})
    data?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
