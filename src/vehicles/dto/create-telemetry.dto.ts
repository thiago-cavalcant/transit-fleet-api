import { IsNumber, IsPositive } from 'class-validator';

export class CreateTelemetryDto {
  @IsNumber()
  @IsPositive()
  mileage: number;
}