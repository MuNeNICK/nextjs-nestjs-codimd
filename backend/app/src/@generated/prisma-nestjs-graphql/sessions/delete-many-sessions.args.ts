import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SessionsWhereInput } from './sessions-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManySessionsArgs {

    @Field(() => SessionsWhereInput, {nullable:true})
    @Type(() => SessionsWhereInput)
    where?: SessionsWhereInput;
}
