import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUser.dto';
import { AuthGuard } from 'src/guards/auth.guard';

@Controller('users')
export class UsersController {

    constructor(private readonly UserService: UsersService){}
    
    @Post()
    createUser(@Body() body:CreateUserDto) {
        return this.UserService.createUser(body)
    }


    @Get()
    @UseGuards(AuthGuard)
    getAllUsers(@Body("") body){
        return body
    }
}
