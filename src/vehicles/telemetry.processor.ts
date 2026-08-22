import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Job } from 'bullmq';
import { PrismaService } from '../prisma/prisma.service';

@Processor('telemetry')
export class TelemetryProcessor extends WorkerHost {
  constructor(private readonly prisma: PrismaService) {
    super();
  }

  async process(job: Job) {
    const { vehicleId, mileage } = job.data;

    console.log(`Processando telemetria do veículo ${vehicleId}...`);

    await this.prisma.vehicle.update({
      where: { id: vehicleId },
      data: { mileage },
    });

    console.log(`Veículo ${vehicleId} atualizado com mileage ${mileage}`);

    return { success: true };
  }
}