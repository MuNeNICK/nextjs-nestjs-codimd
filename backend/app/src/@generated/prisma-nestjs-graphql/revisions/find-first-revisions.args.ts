import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RevisionsWhereInput } from './revisions-where.input';
import { Type } from 'class-transformer';
import { RevisionsOrderByWithRelationInput } from './revisions-order-by-with-relation.input';
import { RevisionsWhereUniqueInput } from './revisions-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RevisionsScalarFieldEnum } from './revisions-scalar-field.enum';

@ArgsType()
export class FindFirstRevisionsArgs {

    @Field(() => RevisionsWhereInput, {nullable:true})
    @Type(() => RevisionsWhereInput)
    where?: RevisionsWhereInput;

    @Field(() => [RevisionsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RevisionsOrderByWithRelationInput>;

    @Field(() => RevisionsWhereUniqueInput, {nullable:true})
    cursor?: RevisionsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [RevisionsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof RevisionsScalarFieldEnum>;
}
