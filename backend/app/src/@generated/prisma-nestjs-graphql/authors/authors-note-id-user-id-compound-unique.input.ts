import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class AuthorsNoteIdUserIdCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    noteId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;
}
