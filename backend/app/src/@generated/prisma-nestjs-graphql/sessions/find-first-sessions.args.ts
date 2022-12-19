import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { SessionsWhereInput } from './sessions-where.input';
import { Type } from 'class-transformer';
import { SessionsOrderByWithRelationInput } from './sessions-order-by-with-relation.input';
import { SessionsWhereUniqueInput } from './sessions-where-unique.input';
import { Int } from '@nestjs/graphql';
import { SessionsScalarFieldEnum } from './sessions-scalar-field.enum';

@ArgsType()
export class FindFirstSessionsArgs {

    @Field(() => SessionsWhereInput, {nullable:true})
    @Type(() => SessionsWhereInput)
    where?: SessionsWhereInput;

    @Field(() => [SessionsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<SessionsOrderByWithRelationInput>;

    @Field(() => SessionsWhereUniqueInput, {nullable:true})
    cursor?: SessionsWhereUniqueInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [SessionsScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof SessionsScalarFieldEnum>;
}
