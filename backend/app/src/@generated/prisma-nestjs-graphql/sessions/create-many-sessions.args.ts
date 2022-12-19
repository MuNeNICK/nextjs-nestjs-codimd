import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SessionsCreateManyInput } from './sessions-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManySessionsArgs {

    @Field(() => [SessionsCreateManyInput], {nullable:false})
    @Type(() => SessionsCreateManyInput)
    data!: Array<SessionsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
