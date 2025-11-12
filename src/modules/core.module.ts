import { Module } from '@nestjs/common';
import { ExampleService } from '../services/example.service';

@Module({
  providers: [ExampleService],
  exports: [ExampleService],
})
export class CoreModule {}

