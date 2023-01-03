import { Field, ObjectType } from "@nestjs/graphql";
import { Users } from "src/@generated/prisma-nestjs-graphql/users/users.model";

@ObjectType()
export class LoginResponse {
    @Field()
    access_token: string;

    @Field(() => Users)
    user: Users;
}