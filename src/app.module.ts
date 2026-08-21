import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehiclesModule } from './vehicles/vehicles.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [VehiclesModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}