import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorsWhereInput } from './authors-where.input';
import { Type } from 'class-transformer';
import { AuthorsOrderByWithAggregationInput } from './authors-order-by-with-aggregation.input';
import { AuthorsScalarFieldEnum } from './authors-scalar-field.enum';
import { AuthorsScalarWhereWithAggregatesInput } from './authors-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { AuthorsCountAggregateInput } from './authors-count-aggregate.input';
import { AuthorsAvgAggregateInput } from './authors-avg-aggregate.input';
import { AuthorsSumAggregateInput } from './authors-sum-aggregate.input';
import { AuthorsMinAggregateInput } from './authors-min-aggregate.input';
import { AuthorsMaxAggregateInput } from './authors-max-aggregate.input';

@ArgsType()
export class AuthorsGroupByArgs {

    @Field(() => AuthorsWhereInput, {nullable:true})
    @Type(() => AuthorsWhereInput)
    where?: AuthorsWhereInput;

    @Field(() => [AuthorsOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<AuthorsOrderByWithAggregationInput>;

    @Field(() => [AuthorsScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof AuthorsScalarFieldEnum>;

    @Field(() => AuthorsScalarWhereWithAggregatesInput, {nullable:true})
    having?: AuthorsScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => AuthorsCountAggregateInput, {nullable:true})
    _count?: AuthorsCountAggregateInput;

    @Field(() => AuthorsAvgAggregateInput, {nullable:true})
    _avg?: AuthorsAvgAggregateInput;

    @Field(() => AuthorsSumAggregateInput, {nullable:true})
    _sum?: AuthorsSumAggregateInput;

    @Field(() => AuthorsMinAggregateInput, {nullable:true})
    _min?: AuthorsMinAggregateInput;

    @Field(() => AuthorsMaxAggregateInput, {nullable:true})
    _max?: AuthorsMaxAggregateInput;
}
