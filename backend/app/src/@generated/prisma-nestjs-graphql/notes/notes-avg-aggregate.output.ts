import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class NotesAvgAggregate {

    @Field(() => Float, {nullable:true})
    viewcount?: number;
}
