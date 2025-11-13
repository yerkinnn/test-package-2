import { Injectable } from '@nestjs/common';

@Injectable()
export class TestClientUseCase {
  execute(): { message: string; timestamp: Date } {
    console.log('TestClientUseCase executed');

    return {
      message: 'TestClientUseCase executed',
      timestamp: new Date(),
    };
  }
}
