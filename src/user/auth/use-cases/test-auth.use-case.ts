import { Injectable } from "@nestjs/common";

@Injectable()
export class TestAuthUseCase {
  execute(): { message: string; timestamp: Date } {
    console.log("TestAuthUseCase executed");

    return {
      message: "TestAuthUseCase executed",
      timestamp: new Date(),
    };
  }
}
