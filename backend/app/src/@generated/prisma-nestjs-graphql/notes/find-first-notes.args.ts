import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotesWhereInput } from './notes-where.input';
import { Type } from 'class-transformer';
import { NotesOrderByWithRelationInput } from './notes-order-by-with-relation.input';
import { NotesWhereUniqueInput } from './notes-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NotesScalarFieldEnum } from './notes-scalar-field.enum';

@ArgsType()
export class FindFirstNotesArgs {

    @Field(() => NotesWhereInput, {nullable:true})
    @Type(() => NotesWhereInput)
    where?: NotesWhereInput;

    @Field(() => [NotesOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<NotesOrderByWithRelationInput>;

    @Field(() => NotesWhereUniqueInput, {nullable:true})
    cursor?: NotesWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [NotesScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof NotesScalarFieldEnum>;
}
