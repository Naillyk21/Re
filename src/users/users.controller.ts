import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { Utilisateur } from '../entities/Utilisateur';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(
    @Body() createUserDto: { email: string; password: string; idrole: number },
  ): Promise<Utilisateur> {
    const { email, password, idrole } = createUserDto;

    if (!email || !password || typeof idrole !== 'number') {
      throw new HttpException(
        'Tous les champs (email, password, idrole) sont obligatoires.',
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.usersService.createUser(email, password, idrole);
  }
}