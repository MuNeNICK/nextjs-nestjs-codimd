import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UsersCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    profileid!: number;

    @Field(() => Int, {nullable:false})
    profile!: number;

    @Field(() => Int, {nullable:false})
    history!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    updatedAt!: number;

    @Field(() => Int, {nullable:false})
    accessToken!: number;

    @Field(() => Int, {nullable:false})
    refreshToken!: number;

    @Field(() => Int, {nullable:false})
    email!: number;

    @Field(() => Int, {nullable:false})
    password!: number;

    @Field(() => Int, {nullable:false})
    deleteToken!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
