import { Model } from 'sequelize-typescript';
import { Photo } from 'src/photos/models/photo.model';
interface photoAttrs {
    id: string;
    title: string;
    link: string;
}
export declare class Comment extends Model<Comment, photoAttrs> {
    id: string;
    text: string;
    photo_id: number;
    user_id: number;
    photo: Photo;
}
export {};
