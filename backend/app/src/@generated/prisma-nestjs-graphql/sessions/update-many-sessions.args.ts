import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SessionsUpdateManyMutationInput } from './sessions-update-many-mutation.input';
import { Type } from 'class-transformer';
import { SessionsWhereInput } from './sessions-where.input';

@ArgsType()
export class UpdateManySessionsArgs {

    @Field(() => SessionsUpdateManyMutationInput, {nullable:false})
    @Type(() => SessionsUpdateManyMutationInput)
    data!: SessionsUpdateManyMutationInput;

    @Field(() => SessionsWhereInput, {nullable:true})
    @Type(() => SessionsWhereInput)
    where?: SessionsWhereInput;
}
