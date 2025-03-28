import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class RegisterAuthDto {
  @IsNumber()
  @IsOptional()
  id?: number;

  @IsString()
  username: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
