import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CreateUserDto): Promise<import("./model/user.model").User>;
    findAll(): Promise<import("./model/user.model").User[]>;
    findOne(id: string): Promise<import("./model/user.model").User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("./model/user.model").User | {
        msg: string;
    }>;
    remove(id: string): Promise<{
        msg: string;
    }>;
}
