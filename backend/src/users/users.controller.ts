import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

interface User {
  userId: string;
  username: string;
}

@Controller('users')
export class UsersController {
  @Get()
  findAll(@Query('role') role?: 'STUDENT' | 'ADMIN') {
    return { role };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return { id };
  }

  @Post()
  create(@Body() user: User) {
    return user;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() user: User) {
    return { id, ...user };
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return { id };
  }
}
