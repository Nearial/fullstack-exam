import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    email: string

    @Column()
    password: string

    @Column()
    fName: string

    @Column()
    lName: string

    @Column()
    DOB: string

    @Column()
    pNumber: string

    @Column()
    address: string
}