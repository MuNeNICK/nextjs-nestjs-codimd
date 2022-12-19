import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RevisionsWhereUniqueInput } from './revisions-where-unique.input';
import { Type } from 'class-transformer';
import { RevisionsCreateInput } from './revisions-create.input';
import { RevisionsUpdateInput } from './revisions-update.input';

@ArgsType()
export class UpsertOneRevisionsArgs {

    @Field(() => RevisionsWhereUniqueInput, {nullable:false})
    @Type(() => RevisionsWhereUniqueInput)
    where!: RevisionsWhereUniqueInput;

    @Field(() => RevisionsCreateInput, {nullable:false})
    @Type(() => RevisionsCreateInput)
    create!: RevisionsCreateInput;

    @Field(() => RevisionsUpdateInput, {nullable:false})
    @Type(() => RevisionsUpdateInput)
    update!: RevisionsUpdateInput;
}
