import { Model } from 'sequelize-typescript';
import { User } from '../../users/model/user.model';
interface userAttrs {
    id: string;
    user_id: number;
    subscribed_user_id: number;
}
export declare class Follower extends Model<Follower, userAttrs> {
    id: number;
    user_id: number;
    subscribed_user_id: number;
    user: User;
}
export {};
