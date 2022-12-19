import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RevisionsWhereInput } from './revisions-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyRevisionsArgs {

    @Field(() => RevisionsWhereInput, {nullable:true})
    @Type(() => RevisionsWhereInput)
    where?: RevisionsWhereInput;
}
