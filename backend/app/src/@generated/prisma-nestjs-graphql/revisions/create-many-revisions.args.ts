import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RevisionsCreateManyInput } from './revisions-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyRevisionsArgs {

    @Field(() => [RevisionsCreateManyInput], {nullable:false})
    @Type(() => RevisionsCreateManyInput)
    data!: Array<RevisionsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
