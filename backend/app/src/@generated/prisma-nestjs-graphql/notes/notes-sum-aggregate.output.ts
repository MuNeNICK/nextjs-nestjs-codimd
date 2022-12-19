import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class NotesSumAggregate {

    @Field(() => Int, {nullable:true})
    viewcount?: number;
}
