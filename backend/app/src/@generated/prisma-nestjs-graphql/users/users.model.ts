import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class Users {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    profileid!: string | null;

    @Field(() => String, {nullable:true})
    profile!: string | null;

    @Field(() => String, {nullable:true})
    history!: string | null;

    @Field(() => Date, {nullable:true})
    createdAt!: Date | null;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;

    @Field(() => String, {nullable:true})
    accessToken!: string | null;

    @Field(() => String, {nullable:true})
    refreshToken!: string | null;

    @Field(() => String, {nullable:true})
    email!: string | null;

    @Field(() => String, {nullable:true})
    password!: string | null;

    @Field(() => String, {nullable:true})
    deleteToken!: string | null;
}
