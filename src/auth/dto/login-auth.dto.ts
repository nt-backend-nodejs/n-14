import { IsNotEmpty, IsString } from 'class-validator';

export class LoginAuthDto {
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
