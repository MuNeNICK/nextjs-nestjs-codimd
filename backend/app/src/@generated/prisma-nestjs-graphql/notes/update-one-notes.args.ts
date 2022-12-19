import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotesUpdateInput } from './notes-update.input';
import { Type } from 'class-transformer';
import { NotesWhereUniqueInput } from './notes-where-unique.input';

@ArgsType()
export class UpdateOneNotesArgs {

    @Field(() => NotesUpdateInput, {nullable:false})
    @Type(() => NotesUpdateInput)
    data!: NotesUpdateInput;

    @Field(() => NotesWhereUniqueInput, {nullable:false})
    @Type(() => NotesWhereUniqueInput)
    where!: NotesWhereUniqueInput;
}
