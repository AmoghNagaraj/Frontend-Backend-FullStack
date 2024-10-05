import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  findAll() {
    throw new Error('Method not implemented.');
  }
  constructor(private prisma: PrismaService) {}

  async getAllUsers() {
    return this.prisma.user.findMany(); 
  }
}
