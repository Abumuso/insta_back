import { Model } from 'sequelize-typescript';
interface userAttrs {
    id: string;
    user_id: number;
    subscribed_user_id: number;
}
export declare class Follower extends Model<Follower, userAttrs> {
    id: number;
    user_id: number;
    subscribed_user_id: number;
}
export {};
