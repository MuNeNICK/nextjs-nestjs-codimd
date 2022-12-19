import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class RevisionsAvgAggregate {

    @Field(() => Float, {nullable:true})
    length?: number;
}
