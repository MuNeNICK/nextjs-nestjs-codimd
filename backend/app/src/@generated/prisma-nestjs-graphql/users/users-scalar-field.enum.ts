import { registerEnumType } from '@nestjs/graphql';

export enum UsersScalarFieldEnum {
    id = "id",
    profileid = "profileid",
    profile = "profile",
    history = "history",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    accessToken = "accessToken",
    refreshToken = "refreshToken",
    email = "email",
    password = "password",
    deleteToken = "deleteToken"
}


registerEnumType(UsersScalarFieldEnum, { name: 'UsersScalarFieldEnum', description: undefined })
