import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { enum_Notes_permission } from './enum-notes-permission.enum';
import { NestedEnumenum_Notes_permissionNullableFilter } from './nested-enumenum-notes-permission-nullable-filter.input';

@InputType()
export class Enumenum_Notes_permissionNullableFilter {

    @Field(() => enum_Notes_permission, {nullable:true})
    equals?: keyof typeof enum_Notes_permission;

    @Field(() => [enum_Notes_permission], {nullable:true})
    in?: Array<keyof typeof enum_Notes_permission>;

    @Field(() => [enum_Notes_permission], {nullable:true})
    notIn?: Array<keyof typeof enum_Notes_permission>;

    @Field(() => NestedEnumenum_Notes_permissionNullableFilter, {nullable:true})
    not?: NestedEnumenum_Notes_permissionNullableFilter;
}
