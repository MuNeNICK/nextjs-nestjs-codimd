import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class Sessions {

    @Field(() => ID, {nullable:false})
    sid!: string;

    @Field(() => Date, {nullable:true})
    expires!: Date | null;

    @Field(() => String, {nullable:true})
    data!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;
}
