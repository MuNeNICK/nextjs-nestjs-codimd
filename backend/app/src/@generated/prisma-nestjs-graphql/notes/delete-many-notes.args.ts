import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotesWhereInput } from './notes-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyNotesArgs {

    @Field(() => NotesWhereInput, {nullable:true})
    @Type(() => NotesWhereInput)
    where?: NotesWhereInput;
}
