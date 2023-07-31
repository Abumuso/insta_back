import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './models/role.model';
export declare class RolesService {
    private roleRepository;
    constructor(roleRepository: typeof Role);
    createRole(createRoleDto: CreateRoleDto): Promise<Role>;
    getRoleByValue(value: string): Promise<Role>;
    getAllRoles(): Promise<Role[]>;
}
