import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class SessionsCreateManyInput {

    @Field(() => String, {nullable:false})
    sid!: string;

    @Field(() => Date, {nullable:true})
    expires?: Date | string;

    @Field(() => String, {nullable:true})
    data?: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;
}
