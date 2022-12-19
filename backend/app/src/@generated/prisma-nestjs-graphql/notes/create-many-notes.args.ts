import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotesCreateManyInput } from './notes-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyNotesArgs {

    @Field(() => [NotesCreateManyInput], {nullable:false})
    @Type(() => NotesCreateManyInput)
    data!: Array<NotesCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
