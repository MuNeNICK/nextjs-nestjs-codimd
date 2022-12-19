import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SessionsCreateInput } from './sessions-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneSessionsArgs {

    @Field(() => SessionsCreateInput, {nullable:false})
    @Type(() => SessionsCreateInput)
    @ValidateNested()
    @Type(() => SessionsCreateInput)
    data!: SessionsCreateInput;
}
