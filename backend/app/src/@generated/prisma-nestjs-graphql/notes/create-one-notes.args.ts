import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotesCreateInput } from './notes-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneNotesArgs {

    @Field(() => NotesCreateInput, {nullable:false})
    @Type(() => NotesCreateInput)
    @ValidateNested()
    @Type(() => NotesCreateInput)
    data!: NotesCreateInput;
}
