import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { enum_Notes_permission } from '../prisma/enum-notes-permission.enum';
import { Int } from '@nestjs/graphql';
import { NotesCountAggregate } from './notes-count-aggregate.output';
import { NotesAvgAggregate } from './notes-avg-aggregate.output';
import { NotesSumAggregate } from './notes-sum-aggregate.output';
import { NotesMinAggregate } from './notes-min-aggregate.output';
import { NotesMaxAggregate } from './notes-max-aggregate.output';

@ObjectType()
export class NotesGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:true})
    ownerId?: string;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => String, {nullable:false})
    shortid!: string;

    @Field(() => enum_Notes_permission, {nullable:true})
    permission?: keyof typeof enum_Notes_permission;

    @Field(() => Int, {nullable:true})
    viewcount?: number;

    @Field(() => String, {nullable:true})
    lastchangeuserId?: string;

    @Field(() => Date, {nullable:true})
    lastchangeAt?: Date | string;

    @Field(() => String, {nullable:true})
    alias?: string;

    @Field(() => Date, {nullable:true})
    savedAt?: Date | string;

    @Field(() => String, {nullable:true})
    authorship?: string;

    @Field(() => Date, {nullable:true})
    deletedAt?: Date | string;

    @Field(() => NotesCountAggregate, {nullable:true})
    _count?: NotesCountAggregate;

    @Field(() => NotesAvgAggregate, {nullable:true})
    _avg?: NotesAvgAggregate;

    @Field(() => NotesSumAggregate, {nullable:true})
    _sum?: NotesSumAggregate;

    @Field(() => NotesMinAggregate, {nullable:true})
    _min?: NotesMinAggregate;

    @Field(() => NotesMaxAggregate, {nullable:true})
    _max?: NotesMaxAggregate;
}
