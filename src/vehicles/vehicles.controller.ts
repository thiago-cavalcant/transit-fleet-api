import { CreateTelemetryDto } from './dto/create-telemetry.dto';
import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue } from 'bullmq';
import { VehiclesService } from './vehicles.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';

@Controller('vehicles')
export class VehiclesController {
  constructor(
    private readonly vehiclesService: VehiclesService,
    @InjectQueue('telemetry') private readonly telemetryQueue: Queue,
  ) {}

  @Post()
  create(@Body() createVehicleDto: CreateVehicleDto) {
    return this.vehiclesService.create(createVehicleDto);
  }

  @Get()
  findAll() {
    return this.vehiclesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vehiclesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVehicleDto: UpdateVehicleDto) {
    return this.vehiclesService.update(+id, updateVehicleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vehiclesService.remove(+id);
  }

    @Post(':id/telemetry')
  async addTelemetry(
    @Param('id') id: string,
    @Body() createTelemetryDto: CreateTelemetryDto,
  ) {
    await this.telemetryQueue.add('update-mileage', {
      vehicleId: +id,
      mileage: createTelemetryDto.mileage,
    });
    return { message: 'Telemetria enfileirada com sucesso' };
  }
}