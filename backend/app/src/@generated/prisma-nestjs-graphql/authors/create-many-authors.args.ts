import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AuthorsCreateManyInput } from './authors-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyAuthorsArgs {

    @Field(() => [AuthorsCreateManyInput], {nullable:false})
    @Type(() => AuthorsCreateManyInput)
    data!: Array<AuthorsCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
