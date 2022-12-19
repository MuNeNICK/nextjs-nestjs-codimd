import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class SequelizeMeta {

    @Field(() => ID, {nullable:false})
    name!: string;
}
