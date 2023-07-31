import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './model/user.model';
export declare class UsersService {
    private userRepo;
    constructor(userRepo: typeof User);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: number): Promise<User>;
    getUserByUsername(username: string): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<User | {
        msg: string;
    }>;
    remove(id: number): Promise<{
        msg: string;
    }>;
}
