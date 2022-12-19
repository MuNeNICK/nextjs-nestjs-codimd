import { registerEnumType } from '@nestjs/graphql';

export enum SessionsScalarFieldEnum {
    sid = "sid",
    expires = "expires",
    data = "data",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(SessionsScalarFieldEnum, { name: 'SessionsScalarFieldEnum', description: undefined })
