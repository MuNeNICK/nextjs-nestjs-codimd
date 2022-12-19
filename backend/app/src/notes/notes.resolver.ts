import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Notes } from 'src/@generated/prisma-nestjs-graphql/notes/notes.model'
import { DeleteOneNotesArgs } from 'src/@generated/prisma-nestjs-graphql/notes/delete-one-notes.args';
import { NotesService } from 'src/notes/notes.service';
import { FindFirstNotesArgs } from 'src/@generated/prisma-nestjs-graphql/notes/find-first-notes.args';
import { FindManyNotesArgs } from 'src/@generated/prisma-nestjs-graphql/notes/find-many-notes.args';

@Resolver(() => Notes)
export class NotesResolver {
    constructor(
        private readonly notesService: NotesService
    ) {}

    @Query(() => Notes)
    note(
        @Args() args: FindFirstNotesArgs
    ) {
        return this.notesService.findFirst(args)
    }

    @Query(() => [Notes])
    notes(
        @Args() args: FindManyNotesArgs
    ) {
        return this.notesService.findMany(args);
    }

    @Mutation(() => Notes)
    async deleteNote(
        @Args() args: DeleteOneNotesArgs
    ) {
        return this.notesService.deleteNote(args);
    }
}