import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotesWhereUniqueInput } from './notes-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueNotesArgs {

    @Field(() => NotesWhereUniqueInput, {nullable:false})
    @Type(() => NotesWhereUniqueInput)
    where!: NotesWhereUniqueInput;
}
