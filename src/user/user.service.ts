import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateResult } from 'typeorm';
import { DeleteResult } from 'typeorm';
import { UserEntity } from './Entities/user.entity';
import { UserDTO } from './DTOs/user.dto';

@Injectable()
export class UserService {
    constructor(@InjectRepository(UserEntity) private userRepository: Repository<UserEntity>) {}

    async findAll(): Promise<UserEntity[]> {
        return await this.userRepository.find()
    }

    async findById(id: number): Promise<UserEntity> {
        return await this.userRepository.findOneBy({id: id});
    }

    async create(userDto: UserDTO): Promise<UserEntity> {
        return await this.userRepository.save(userDto)
    }

    async update(id: number, newProfile: UserDTO): Promise<UpdateResult> {
        return await this.userRepository.update(id, newProfile);
    }

    async delete(id: number): Promise<DeleteResult> {
        return await this.userRepository.delete(id)
    }
}
