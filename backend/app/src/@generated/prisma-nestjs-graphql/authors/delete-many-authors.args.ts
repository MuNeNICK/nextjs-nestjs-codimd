import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorsWhereInput } from './authors-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyAuthorsArgs {

    @Field(() => AuthorsWhereInput, {nullable:true})
    @Type(() => AuthorsWhereInput)
    where?: AuthorsWhereInput;
}
