import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class SequelizeMetaMaxAggregate {

    @Field(() => String, {nullable:true})
    name?: string;
}
