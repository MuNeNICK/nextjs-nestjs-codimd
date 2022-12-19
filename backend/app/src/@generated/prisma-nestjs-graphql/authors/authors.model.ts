import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class Authors {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:true})
    color!: string | null;

    @Field(() => String, {nullable:true})
    noteId!: string | null;

    @Field(() => String, {nullable:true})
    userId!: string | null;

    @Field(() => Date, {nullable:true})
    createdAt!: Date | null;

    @Field(() => Date, {nullable:true})
    updatedAt!: Date | null;
}
