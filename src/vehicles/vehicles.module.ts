import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bullmq';
import { VehiclesService } from './vehicles.service';
import { VehiclesController } from './vehicles.controller';
import { TelemetryProcessor } from './telemetry.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'telemetry',
    }),
  ],
  controllers: [VehiclesController],
  providers: [VehiclesService, TelemetryProcessor],
})
export class VehiclesModule {}