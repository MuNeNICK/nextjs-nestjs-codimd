import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { Notes } from 'src/@generated/prisma-nestjs-graphql/notes/notes.model'
import { FindFirstNotesArgs } from 'src/@generated/prisma-nestjs-graphql/notes/find-first-notes.args';
import { DeleteOneNotesArgs } from 'src/@generated/prisma-nestjs-graphql/notes/delete-one-notes.args';
import { FindUniqueNotesArgs } from 'src/@generated/prisma-nestjs-graphql/notes/find-unique-notes.args';
import { FindManyNotesArgs } from 'src/@generated/prisma-nestjs-graphql/notes/find-many-notes.args';

@Injectable()
export class NotesService {
    constructor(
        private readonly prisma: PrismaService
    ) {}

    async findFirst(args: FindFirstNotesArgs): Promise<Notes | null> {
        return this.prisma.notes.findFirst(args);
    }

    async findUnique(args: FindUniqueNotesArgs): Promise<Notes | null> {
        return this.prisma.notes.findUnique(args);
    }

    async findMany(args: FindManyNotesArgs): Promise<Notes[] | null> {
        return this.prisma.notes.findMany(args);
    }

    async deleteNote(args: DeleteOneNotesArgs): Promise<Notes> {
        return this.prisma.notes.delete(args);
    }
}