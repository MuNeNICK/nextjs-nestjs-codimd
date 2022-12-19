import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RevisionsWhereUniqueInput } from './revisions-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneRevisionsArgs {

    @Field(() => RevisionsWhereUniqueInput, {nullable:false})
    @Type(() => RevisionsWhereUniqueInput)
    where!: RevisionsWhereUniqueInput;
}
