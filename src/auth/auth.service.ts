import { Injectable, Put, Res } from '@nestjs/common';

import { UserService } from 'src/user/user.service';
import { LoginAuthDto, RegisterAuthDto } from './dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  register(registerAuthDto: RegisterAuthDto) {
    return this.userService.create(registerAuthDto);
  }

  async login(loginAuthDto: LoginAuthDto) {
    const { username, password } = loginAuthDto;
    const user = await this.userService.findByUsername(username);

    if (!user) {
      throw new Error('User not found');
    }

    if (user.password === password) {
      return user;
    } else {
      return 'password wrong';
    }
  }
}
