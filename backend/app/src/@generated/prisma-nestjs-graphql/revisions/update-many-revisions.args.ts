import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RevisionsUpdateManyMutationInput } from './revisions-update-many-mutation.input';
import { Type } from 'class-transformer';
import { RevisionsWhereInput } from './revisions-where.input';

@ArgsType()
export class UpdateManyRevisionsArgs {

    @Field(() => RevisionsUpdateManyMutationInput, {nullable:false})
    @Type(() => RevisionsUpdateManyMutationInput)
    data!: RevisionsUpdateManyMutationInput;

    @Field(() => RevisionsWhereInput, {nullable:true})
    @Type(() => RevisionsWhereInput)
    where?: RevisionsWhereInput;
}
