import { IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsNumber()
  id?: number | undefined;

  @IsString()
  username: string;

  @IsString()
  password: string;
}
