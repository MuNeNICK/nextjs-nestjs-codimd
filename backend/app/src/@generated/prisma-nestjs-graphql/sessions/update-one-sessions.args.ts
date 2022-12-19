import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SessionsUpdateInput } from './sessions-update.input';
import { Type } from 'class-transformer';
import { SessionsWhereUniqueInput } from './sessions-where-unique.input';

@ArgsType()
export class UpdateOneSessionsArgs {

    @Field(() => SessionsUpdateInput, {nullable:false})
    @Type(() => SessionsUpdateInput)
    data!: SessionsUpdateInput;

    @Field(() => SessionsWhereUniqueInput, {nullable:false})
    @Type(() => SessionsWhereUniqueInput)
    where!: SessionsWhereUniqueInput;
}
