import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotesWhereInput } from './notes-where.input';
import { Type } from 'class-transformer';
import { NotesOrderByWithAggregationInput } from './notes-order-by-with-aggregation.input';
import { NotesScalarFieldEnum } from './notes-scalar-field.enum';
import { NotesScalarWhereWithAggregatesInput } from './notes-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { NotesCountAggregateInput } from './notes-count-aggregate.input';
import { NotesAvgAggregateInput } from './notes-avg-aggregate.input';
import { NotesSumAggregateInput } from './notes-sum-aggregate.input';
import { NotesMinAggregateInput } from './notes-min-aggregate.input';
import { NotesMaxAggregateInput } from './notes-max-aggregate.input';

@ArgsType()
export class NotesGroupByArgs {

    @Field(() => NotesWhereInput, {nullable:true})
    @Type(() => NotesWhereInput)
    where?: NotesWhereInput;

    @Field(() => [NotesOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<NotesOrderByWithAggregationInput>;

    @Field(() => [NotesScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof NotesScalarFieldEnum>;

    @Field(() => NotesScalarWhereWithAggregatesInput, {nullable:true})
    having?: NotesScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => NotesCountAggregateInput, {nullable:true})
    _count?: NotesCountAggregateInput;

    @Field(() => NotesAvgAggregateInput, {nullable:true})
    _avg?: NotesAvgAggregateInput;

    @Field(() => NotesSumAggregateInput, {nullable:true})
    _sum?: NotesSumAggregateInput;

    @Field(() => NotesMinAggregateInput, {nullable:true})
    _min?: NotesMinAggregateInput;

    @Field(() => NotesMaxAggregateInput, {nullable:true})
    _max?: NotesMaxAggregateInput;
}
