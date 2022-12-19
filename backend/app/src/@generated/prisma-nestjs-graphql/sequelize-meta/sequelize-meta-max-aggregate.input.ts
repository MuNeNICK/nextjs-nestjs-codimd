import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SequelizeMetaMaxAggregateInput {

    @Field(() => Boolean, {nullable:true})
    name?: true;
}
