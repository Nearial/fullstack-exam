import { Body, Controller, Delete, Get, Param, Post, Put, } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDTO } from './DTOs/user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService : UserService) {}

    //Gets all users
    @Get()
    getUsers() {
        return this.userService.findAll();
    }

    //Gets a user by id
    @Get(':id')
    getBookingsByID(@Param('id') id : number) {
        return this.userService.findById(Number(id));
    }
    
    //creates user
    @Post()
    async createUser(@Body() user : UserDTO) {
        return this.userService.create(user);
    }
    
    //updates a user by id
    @Put(':id')
    async updateUser(@Param('id') id: number, @Body() user : UserDTO) {
        return this.userService.update(id, user);
    }
    
    //deletes a user by id
    @Delete(':id')
    async deleteUser(@Param('id') id: number) {
        this.userService.delete(id);
    }
}
