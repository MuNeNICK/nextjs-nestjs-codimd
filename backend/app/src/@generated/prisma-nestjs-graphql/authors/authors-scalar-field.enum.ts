import { registerEnumType } from '@nestjs/graphql';

export enum AuthorsScalarFieldEnum {
    id = "id",
    color = "color",
    noteId = "noteId",
    userId = "userId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(AuthorsScalarFieldEnum, { name: 'AuthorsScalarFieldEnum', description: undefined })
