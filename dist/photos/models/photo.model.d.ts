import { Model } from 'sequelize-typescript';
import { User } from '../../users/model/user.model';
import { Asset } from '../../assets/model/asset.model';
import { Comment } from '../../comment/models/comment.model';
interface photoAttrs {
    id: string;
    title: string;
    link: string;
    users: number[];
}
export declare class Photo extends Model<Photo, photoAttrs> {
    id: string;
    title: string;
    link: string;
    users: User[];
    assets: Asset[];
    comments: Comment[];
}
export {};
