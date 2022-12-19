import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorsUpdateManyMutationInput } from './authors-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AuthorsWhereInput } from './authors-where.input';

@ArgsType()
export class UpdateManyAuthorsArgs {

    @Field(() => AuthorsUpdateManyMutationInput, {nullable:false})
    @Type(() => AuthorsUpdateManyMutationInput)
    data!: AuthorsUpdateManyMutationInput;

    @Field(() => AuthorsWhereInput, {nullable:true})
    @Type(() => AuthorsWhereInput)
    where?: AuthorsWhereInput;
}
