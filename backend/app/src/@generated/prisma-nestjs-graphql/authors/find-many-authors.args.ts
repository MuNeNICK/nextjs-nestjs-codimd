import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorsWhereInput } from './authors-where.input';
import { Type } from 'class-transformer';
import { AuthorsOrderByWithRelationInput } from './authors-order-by-with-relation.input';
import { AuthorsWhereUniqueInput } from './authors-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AuthorsScalarFieldEnum } from './authors-scalar-field.enum';

@ArgsType()
export class FindManyAuthorsArgs {

    @Field(() => AuthorsWhereInput, {nullable:true})
    @Type(() => AuthorsWhereInput)
    where?: AuthorsWhereInput;

    @Field(() => [AuthorsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AuthorsOrderByWithRelationInput>;

    @Field(() => AuthorsWhereUniqueInput, {nullable:true})
    cursor?: AuthorsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AuthorsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof AuthorsScalarFieldEnum>;
}
