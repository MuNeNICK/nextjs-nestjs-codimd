import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SessionsWhereUniqueInput } from './sessions-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneSessionsArgs {

    @Field(() => SessionsWhereUniqueInput, {nullable:false})
    @Type(() => SessionsWhereUniqueInput)
    where!: SessionsWhereUniqueInput;
}
