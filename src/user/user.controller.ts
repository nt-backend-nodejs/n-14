import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

// @UseGuards(AuthGuard)
@Controller('user') // http://localhost:3000/user -alll
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post() // http://localhost:3000/user  method post
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  @Get() // http://localhost:3000/user get
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id') // http://localhost:3000/user/1 -method get
  findOne(@Param('id', ParseIntPipe) id: number) {
    console.log(typeof id);
    return this.userService.findOne(+id);
  }

  @Patch(':id') // http://localhost:3000/user/1 -method patch
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id') // http://localhost:3000/user/1 -method delete
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
