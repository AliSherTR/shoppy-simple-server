import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { CreateUserDto } from './dto/createUser.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from "bcrypt"
@Injectable()
export class UsersService {

    constructor(private readonly prismaService : PrismaService){}
    async createUser(body : CreateUserDto) {
        try {
            return await this.prismaService.user.create({
                data: {
                    ...body,
                    password: await bcrypt.hash(body.password , 10)
                },
                select: {
                    email: true,
                    id: true
                }
            })
        } catch (error) {
            if(error.code === "P2002") {
                throw new UnprocessableEntityException("Account Already Exists!!")
            }
            throw error;
        }  
    }
}
