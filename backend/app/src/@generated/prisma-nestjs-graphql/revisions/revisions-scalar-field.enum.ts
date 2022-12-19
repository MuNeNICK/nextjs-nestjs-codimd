import { registerEnumType } from '@nestjs/graphql';

export enum RevisionsScalarFieldEnum {
    id = "id",
    noteId = "noteId",
    patch = "patch",
    lastContent = "lastContent",
    content = "content",
    length = "length",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    authorship = "authorship"
}


registerEnumType(RevisionsScalarFieldEnum, { name: 'RevisionsScalarFieldEnum', description: undefined })
