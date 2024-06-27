import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventController } from './event/event.controller';
import { EventsModule } from './events/events.module';
import { PrismaService } from './prisma/prisma.service';
import { SpotsModule } from './spots/spots.module';

@Module({
  imports: [EventsModule, SpotsModule],
  controllers: [AppController, EventController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
