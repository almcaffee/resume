import { Controller } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

@Controller()
export class BaseController {
  constructor() {
    this.onInit();
  }
  onInit() {}
}
