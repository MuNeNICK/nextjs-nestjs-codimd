import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SessionsCountAggregate {

    @Field(() => Int, {nullable:false})
    sid!: number;

    @Field(() => Int, {nullable:false})
    expires!: number;

    @Field(() => Int, {nullable:false})
    data!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
