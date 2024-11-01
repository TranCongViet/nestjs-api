import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() body: { email: string; password: string }) {
    const { email, password } = body;
    if (!email || !password) {
      throw new BadRequestException('Email and password are required.');
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    if (!email || !emailRegex.test(email)) {
      throw new BadRequestException('Invalid email format.');
    }
    return await this.userService.register(email, password);
  }
}
