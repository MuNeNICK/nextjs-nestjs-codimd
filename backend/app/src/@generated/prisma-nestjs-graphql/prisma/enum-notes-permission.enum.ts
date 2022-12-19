import { registerEnumType } from '@nestjs/graphql';

export enum enum_Notes_permission {
    freely = "freely",
    editable = "editable",
    limited = "limited",
    locked = "locked",
    'protected' = "protected",
    'private' = "private"
}


registerEnumType(enum_Notes_permission, { name: 'enum_Notes_permission', description: undefined })
