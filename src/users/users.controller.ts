import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/createUser.dto';

@Controller('users')
export class UsersController {

    constructor(private readonly UserService: UsersService){}
    
    @Post()
    createUser(@Body() body:CreateUserDto) {
        return this.UserService.createUser(body)
    }


    @Get()
    getAllUsers(){
        return "Hello world"
    }
}
