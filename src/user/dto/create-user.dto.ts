import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  id?: number | undefined;

  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
