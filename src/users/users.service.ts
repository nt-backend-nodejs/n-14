import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

export interface IUser {
  id: number;
  name: string;
  age: number;
  email: string;
  password: string;
}

const users: IUser[] = [];

@Injectable()
export class UsersService {
  create(createUserDto: CreateUserDto) {
    console.log({ createUserDto });
    const user: IUser = {
      ...createUserDto,
      id: users.length + 1,
    };
    users.push(user);

    return user;
  }

  findAll(): IUser[] {
    return users;
  }

  findOne(id: number) {
    const user = users.find((user) => user.id === id);
    if (!user) {
      return 'user not found!';
    }
    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
