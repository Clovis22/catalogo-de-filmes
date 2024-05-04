import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDTO } from './dtos/createUser.dto';
import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>,
    ) {}

    async createUser(createUserDTO: CreateUserDTO): Promise<UserEntity> {

        const bcrypt = require('bcryptjs');
        const saltOrRounds = 10;
        const passwordHashed = await bcrypt.hash(createUserDTO.password, saltOrRounds);

        return this.userRepository.save({
            ...createUserDTO,
            password: passwordHashed
        });

    }

    async getAllUser(): Promise<UserEntity[]> {
        return this.userRepository.find();
    }
    
    async findUserById(userId: number): Promise<UserEntity> {
        const user = await this.userRepository.findOne({
          where: {
            id: userId,
          },
        });
    
        if (!user) {
          throw new NotFoundException(`UserId: ${userId} Not Found`);
        }
    
        return user;
      }

      async findUserByName(nameUser: string): Promise<UserEntity> {
        const user = await this.userRepository.findOne({
          where: {
            name: nameUser,
          },
        });
    
        if (!user) {
          throw new NotFoundException(`Name de usuario: ${nameUser} Not Found`);
        }
    
        return user;
      }
}
