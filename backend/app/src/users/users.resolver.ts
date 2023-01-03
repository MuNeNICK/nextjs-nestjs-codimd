import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Users } from 'src/@generated/prisma-nestjs-graphql/users/users.model'
import { CreateOneUsersArgs } from 'src/@generated/prisma-nestjs-graphql/users/create-one-users.args';
import { UsersService } from 'src/users/users.service';
import { FindFirstUsersArgs } from 'src/@generated/prisma-nestjs-graphql/users/find-first-users.args';
import { UseGuards } from '@nestjs/common';
 import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Resolver(() => Users)
export class UsersResolver {
    constructor(
        private readonly userService: UsersService
    ) {}

    @Query(() => Users)
    @UseGuards(JwtAuthGuard)
    user(
        @Args() args: FindFirstUsersArgs
    ) {
        return this.userService.findFirst(args)
    }

    @Query(() => [Users])
    @UseGuards(JwtAuthGuard)
    users(
        @Args() args: FindFirstUsersArgs
    ) {
        return this.userService.findMany(args)
    }
}