import { IsEmail, IsString, MinLength, MaxLength } from 'class-validator';

export class CreateUserBodyDto {
  @IsString()
  @IsEmail()
  readonly email: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  readonly password: string;

  @IsString()
  readonly name: string;
}
