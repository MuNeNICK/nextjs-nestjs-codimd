import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorsCreateInput } from './authors-create.input';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

@ArgsType()
export class CreateOneAuthorsArgs {

    @Field(() => AuthorsCreateInput, {nullable:false})
    @Type(() => AuthorsCreateInput)
    @ValidateNested()
    @Type(() => AuthorsCreateInput)
    data!: AuthorsCreateInput;
}
