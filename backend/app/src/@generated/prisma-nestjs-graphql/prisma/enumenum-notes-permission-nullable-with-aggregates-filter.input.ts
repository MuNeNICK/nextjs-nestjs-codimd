import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { enum_Notes_permission } from './enum-notes-permission.enum';
import { NestedEnumenum_Notes_permissionNullableWithAggregatesFilter } from './nested-enumenum-notes-permission-nullable-with-aggregates-filter.input';
import { NestedIntNullableFilter } from './nested-int-nullable-filter.input';
import { NestedEnumenum_Notes_permissionNullableFilter } from './nested-enumenum-notes-permission-nullable-filter.input';

@InputType()
export class Enumenum_Notes_permissionNullableWithAggregatesFilter {

    @Field(() => enum_Notes_permission, {nullable:true})
    equals?: keyof typeof enum_Notes_permission;

    @Field(() => [enum_Notes_permission], {nullable:true})
    in?: Array<keyof typeof enum_Notes_permission>;

    @Field(() => [enum_Notes_permission], {nullable:true})
    notIn?: Array<keyof typeof enum_Notes_permission>;

    @Field(() => NestedEnumenum_Notes_permissionNullableWithAggregatesFilter, {nullable:true})
    not?: NestedEnumenum_Notes_permissionNullableWithAggregatesFilter;

    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: NestedIntNullableFilter;

    @Field(() => NestedEnumenum_Notes_permissionNullableFilter, {nullable:true})
    _min?: NestedEnumenum_Notes_permissionNullableFilter;

    @Field(() => NestedEnumenum_Notes_permissionNullableFilter, {nullable:true})
    _max?: NestedEnumenum_Notes_permissionNullableFilter;
}
