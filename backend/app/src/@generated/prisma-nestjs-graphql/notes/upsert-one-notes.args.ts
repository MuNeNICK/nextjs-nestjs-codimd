import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotesWhereUniqueInput } from './notes-where-unique.input';
import { Type } from 'class-transformer';
import { NotesCreateInput } from './notes-create.input';
import { NotesUpdateInput } from './notes-update.input';

@ArgsType()
export class UpsertOneNotesArgs {

    @Field(() => NotesWhereUniqueInput, {nullable:false})
    @Type(() => NotesWhereUniqueInput)
    where!: NotesWhereUniqueInput;

    @Field(() => NotesCreateInput, {nullable:false})
    @Type(() => NotesCreateInput)
    create!: NotesCreateInput;

    @Field(() => NotesUpdateInput, {nullable:false})
    @Type(() => NotesUpdateInput)
    update!: NotesUpdateInput;
}
