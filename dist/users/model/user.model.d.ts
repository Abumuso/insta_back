import { Model } from 'sequelize-typescript';
import { Photo } from 'src/photos/models/photo.model';
import { Role } from 'src/roles/models/role.model';
interface userAttrs {
    id: string;
    name: string;
    description: string;
}
export declare class User extends Model<User, userAttrs> {
    id: string;
    name: string;
    username: string;
    password: string;
    photos: Photo[];
    roles: Role[];
}
export {};
