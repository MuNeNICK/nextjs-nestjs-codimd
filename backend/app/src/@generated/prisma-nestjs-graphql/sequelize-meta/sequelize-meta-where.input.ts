import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class SequelizeMetaWhereInput {

    @Field(() => [SequelizeMetaWhereInput], {nullable:true})
    AND?: Array<SequelizeMetaWhereInput>;

    @Field(() => [SequelizeMetaWhereInput], {nullable:true})
    OR?: Array<SequelizeMetaWhereInput>;

    @Field(() => [SequelizeMetaWhereInput], {nullable:true})
    NOT?: Array<SequelizeMetaWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    name?: StringFilter;
}
