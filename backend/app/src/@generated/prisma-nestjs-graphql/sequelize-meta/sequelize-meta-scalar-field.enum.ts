import { registerEnumType } from '@nestjs/graphql';

export enum SequelizeMetaScalarFieldEnum {
    name = "name"
}


registerEnumType(SequelizeMetaScalarFieldEnum, { name: 'SequelizeMetaScalarFieldEnum', description: undefined })
