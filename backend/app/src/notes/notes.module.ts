import { Module } from '@nestjs/common';
import { NotesService } from './notes.service';
import { NotesResolver } from './notes.resolver';
import { PrismaService } from 'src/prisma.service';

@Module({
  providers: [NotesService, NotesResolver, PrismaService],
  exports: [NotesService]
})
export class NotesModule {}
