import { Model } from 'sequelize-typescript';
import { User } from 'src/users/model/user.model';
interface RoleCreationAttr {
    value: string;
    description: string;
}
export declare class Role extends Model<Role, RoleCreationAttr> {
    id: number;
    value: string;
    description: string;
    user: User[];
}
export {};
