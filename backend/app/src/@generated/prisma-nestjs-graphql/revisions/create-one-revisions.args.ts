import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RevisionsCreateInput } from './revisions-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneRevisionsArgs {

    @Field(() => RevisionsCreateInput, {nullable:false})
    @Type(() => RevisionsCreateInput)
    @ValidateNested()
    @Type(() => RevisionsCreateInput)
    data!: RevisionsCreateInput;
}
