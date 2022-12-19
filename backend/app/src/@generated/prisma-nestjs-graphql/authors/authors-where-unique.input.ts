import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AuthorsNoteIdUserIdCompoundUniqueInput } from './authors-note-id-user-id-compound-unique.input';

@InputType()
export class AuthorsWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => AuthorsNoteIdUserIdCompoundUniqueInput, {nullable:true})
    noteId_userId?: AuthorsNoteIdUserIdCompoundUniqueInput;
}
