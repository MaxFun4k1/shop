import { IsOptional, IsString, IsEmail, MinLength } from 'class-validator';

export class AuthDto {
  @IsOptional() //При авторизации не нужен. Только при регистрации
  @IsString()
  name: string;

  @IsString({
    message: 'Почта обязательна'
  })
  @IsEmail()
  email: string;

  @MinLength(6, {
    message: 'Пароль должен содержать не менее 6 символов!'
  })
  @IsString({
    message: 'Пароль обязателен'
  })
  password: string;
}
