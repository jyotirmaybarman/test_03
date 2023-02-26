import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    const envs = process.env;
    return {
      message: "Hello world",
      envs
    };
  }
}
