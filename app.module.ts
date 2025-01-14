import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { UsersModule } from './user/user.module'; 

@Module({
  imports: [UsersModule], 
  controllers: [AppController],
  providers: [],
})
export class AppModule {}