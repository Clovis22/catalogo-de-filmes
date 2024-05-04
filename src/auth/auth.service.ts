import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEntity } from 'src/user/entities/user.entity';
import { LoginDto } from './dtos/login.dto';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { ReturnUserDTO } from 'src/user/dtos/returnUser.dto';
import { LoginPayLoad } from './dtos/loginPayLoad.dto';
import { ReturnLogin } from './dtos/returnLogin.dto';

@Injectable()
export class AuthService {

    constructor(private readonly userService: UserService, private jwtService: JwtService) {}

    async login(loginDto: LoginDto): Promise<ReturnLogin> {
        const user: UserEntity | undefined = await this.userService.findUserByName(loginDto.name).catch(() => undefined);

        const bcrypt = require('bcryptjs');
        const isMatch = await bcrypt.compare(loginDto.password, user?.password || '');

        if(!user || !isMatch) {
            throw new NotFoundException('Nome ou senha inválido');
        }

        return {
            accessToken: this.jwtService.sign({...new LoginPayLoad(user)}),
            user: new ReturnUserDTO(user)
        };
    }

}
