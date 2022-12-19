import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { enum_Notes_permission } from './enum-notes-permission.enum';

@InputType()
export class NestedEnumenum_Notes_permissionNullableFilter {

    @Field(() => enum_Notes_permission, {nullable:true})
    equals?: keyof typeof enum_Notes_permission;

    @Field(() => [enum_Notes_permission], {nullable:true})
    in?: Array<keyof typeof enum_Notes_permission>;

    @Field(() => [enum_Notes_permission], {nullable:true})
    notIn?: Array<keyof typeof enum_Notes_permission>;

    @Field(() => NestedEnumenum_Notes_permissionNullableFilter, {nullable:true})
    not?: NestedEnumenum_Notes_permissionNullableFilter;
}
