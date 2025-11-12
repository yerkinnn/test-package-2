import { Injectable } from '@nestjs/common';

@Injectable()
export class ExampleService {
  getHello(): string {
    return 'Hello from ngdem-backend-core!';
  }

  getData(): { message: string; timestamp: Date } {
    return {
      message: 'Data from core service',
      timestamp: new Date(),
    };
  }
}

