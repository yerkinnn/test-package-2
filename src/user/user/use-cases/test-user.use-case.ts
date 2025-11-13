import { Injectable } from "@nestjs/common";

@Injectable()
export class TestUserUseCase {
  execute(): { message: string; timestamp: Date } {
    console.log("TestUserUseCase executed");

    return {
      message: "TestUserUseCase executed",
      timestamp: new Date(),
    };
  }
}
