import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class RevisionsSumAggregate {

    @Field(() => Int, {nullable:true})
    length?: number;
}
