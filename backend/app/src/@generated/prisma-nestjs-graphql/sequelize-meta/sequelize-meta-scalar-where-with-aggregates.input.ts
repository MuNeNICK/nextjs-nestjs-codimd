import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class SequelizeMetaScalarWhereWithAggregatesInput {

    @Field(() => [SequelizeMetaScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<SequelizeMetaScalarWhereWithAggregatesInput>;

    @Field(() => [SequelizeMetaScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<SequelizeMetaScalarWhereWithAggregatesInput>;

    @Field(() => [SequelizeMetaScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<SequelizeMetaScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;
}
