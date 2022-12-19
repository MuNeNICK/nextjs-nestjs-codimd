import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorsUpdateInput } from './authors-update.input';
import { Type } from 'class-transformer';
import { AuthorsWhereUniqueInput } from './authors-where-unique.input';

@ArgsType()
export class UpdateOneAuthorsArgs {

    @Field(() => AuthorsUpdateInput, {nullable:false})
    @Type(() => AuthorsUpdateInput)
    data!: AuthorsUpdateInput;

    @Field(() => AuthorsWhereUniqueInput, {nullable:false})
    @Type(() => AuthorsWhereUniqueInput)
    where!: AuthorsWhereUniqueInput;
}
