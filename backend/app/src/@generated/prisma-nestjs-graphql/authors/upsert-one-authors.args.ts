import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorsWhereUniqueInput } from './authors-where-unique.input';
import { Type } from 'class-transformer';
import { AuthorsCreateInput } from './authors-create.input';
import { AuthorsUpdateInput } from './authors-update.input';

@ArgsType()
export class UpsertOneAuthorsArgs {

    @Field(() => AuthorsWhereUniqueInput, {nullable:false})
    @Type(() => AuthorsWhereUniqueInput)
    where!: AuthorsWhereUniqueInput;

    @Field(() => AuthorsCreateInput, {nullable:false})
    @Type(() => AuthorsCreateInput)
    create!: AuthorsCreateInput;

    @Field(() => AuthorsUpdateInput, {nullable:false})
    @Type(() => AuthorsUpdateInput)
    update!: AuthorsUpdateInput;
}
