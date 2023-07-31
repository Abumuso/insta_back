import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './models/role.model';
export declare class RolesController {
    private readonly rolesService;
    constructor(rolesService: RolesService);
    create(createRoleDto: CreateRoleDto): Promise<Role>;
    getAllRoles(): Promise<Role[]>;
    findOne(value: string): Promise<Role>;
}
