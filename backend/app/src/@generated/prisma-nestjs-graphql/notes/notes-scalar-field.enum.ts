import { registerEnumType } from '@nestjs/graphql';

export enum NotesScalarFieldEnum {
    id = "id",
    ownerId = "ownerId",
    content = "content",
    title = "title",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    shortid = "shortid",
    permission = "permission",
    viewcount = "viewcount",
    lastchangeuserId = "lastchangeuserId",
    lastchangeAt = "lastchangeAt",
    alias = "alias",
    savedAt = "savedAt",
    authorship = "authorship",
    deletedAt = "deletedAt"
}


registerEnumType(NotesScalarFieldEnum, { name: 'NotesScalarFieldEnum', description: undefined })
