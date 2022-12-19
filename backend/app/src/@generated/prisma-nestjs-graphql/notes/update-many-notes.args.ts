import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotesUpdateManyMutationInput } from './notes-update-many-mutation.input';
import { Type } from 'class-transformer';
import { NotesWhereInput } from './notes-where.input';

@ArgsType()
export class UpdateManyNotesArgs {

    @Field(() => NotesUpdateManyMutationInput, {nullable:false})
    @Type(() => NotesUpdateManyMutationInput)
    data!: NotesUpdateManyMutationInput;

    @Field(() => NotesWhereInput, {nullable:true})
    @Type(() => NotesWhereInput)
    where?: NotesWhereInput;
}
