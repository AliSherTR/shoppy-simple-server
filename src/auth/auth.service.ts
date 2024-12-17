import { BadRequestException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from "bcrypt"

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService){}

    async validateUser(email: string , password: string) {
        try {
            const user = await this.userService.getUser(email)
            const authenticated = await bcrypt.compare(password , user.password)
            if(!authenticated) throw new BadRequestException("Invalid Email or Password")
            return user;
        } catch (error) {
            throw new BadRequestException("Invalid Credentials")
        }
        
    }
}
