import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { enum_Notes_permission } from './enum-notes-permission.enum';

@InputType()
export class NullableEnumenum_Notes_permissionFieldUpdateOperationsInput {

    @Field(() => enum_Notes_permission, {nullable:true})
    set?: keyof typeof enum_Notes_permission;
}
