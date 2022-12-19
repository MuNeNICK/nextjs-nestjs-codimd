import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { NotesCountAggregate } from './notes-count-aggregate.output';
import { NotesAvgAggregate } from './notes-avg-aggregate.output';
import { NotesSumAggregate } from './notes-sum-aggregate.output';
import { NotesMinAggregate } from './notes-min-aggregate.output';
import { NotesMaxAggregate } from './notes-max-aggregate.output';

@ObjectType()
export class AggregateNotes {

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
