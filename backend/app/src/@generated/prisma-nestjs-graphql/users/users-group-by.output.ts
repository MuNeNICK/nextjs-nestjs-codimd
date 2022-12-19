import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UsersCountAggregate } from './users-count-aggregate.output';
import { UsersMinAggregate } from './users-min-aggregate.output';
import { UsersMaxAggregate } from './users-max-aggregate.output';

@ObjectType()
export class UsersGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    profileid?: string;

    @Field(() => String, {nullable:true})
    profile?: string;

    @Field(() => String, {nullable:true})
    history?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:true})
    accessToken?: string;

    @Field(() => String, {nullable:true})
    refreshToken?: string;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => String, {nullable:true})
    password?: string;

    @Field(() => String, {nullable:true})
    deleteToken?: string;

    @Field(() => UsersCountAggregate, {nullable:true})
    _count?: UsersCountAggregate;

    @Field(() => UsersMinAggregate, {nullable:true})
    _min?: UsersMinAggregate;

    @Field(() => UsersMaxAggregate, {nullable:true})
    _max?: UsersMaxAggregate;
}
