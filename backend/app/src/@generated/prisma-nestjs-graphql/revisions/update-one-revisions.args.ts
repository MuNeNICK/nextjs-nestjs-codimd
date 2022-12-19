import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RevisionsUpdateInput } from './revisions-update.input';
import { Type } from 'class-transformer';
import { RevisionsWhereUniqueInput } from './revisions-where-unique.input';

@ArgsType()
export class UpdateOneRevisionsArgs {

    @Field(() => RevisionsUpdateInput, {nullable:false})
    @Type(() => RevisionsUpdateInput)
    data!: RevisionsUpdateInput;

    @Field(() => RevisionsWhereUniqueInput, {nullable:false})
    @Type(() => RevisionsWhereUniqueInput)
    where!: RevisionsWhereUniqueInput;
}
