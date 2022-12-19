import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SessionsWhereUniqueInput } from './sessions-where-unique.input';
import { Type } from 'class-transformer';
import { SessionsCreateInput } from './sessions-create.input';
import { SessionsUpdateInput } from './sessions-update.input';

@ArgsType()
export class UpsertOneSessionsArgs {

    @Field(() => SessionsWhereUniqueInput, {nullable:false})
    @Type(() => SessionsWhereUniqueInput)
    where!: SessionsWhereUniqueInput;

    @Field(() => SessionsCreateInput, {nullable:false})
    @Type(() => SessionsCreateInput)
    create!: SessionsCreateInput;

    @Field(() => SessionsUpdateInput, {nullable:false})
    @Type(() => SessionsUpdateInput)
    update!: SessionsUpdateInput;
}
