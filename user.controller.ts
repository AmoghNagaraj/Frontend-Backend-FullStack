import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service'; // Adjust path as necessary

@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll(); 
  }
}