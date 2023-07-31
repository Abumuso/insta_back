import { Model } from 'sequelize-typescript';
import { Comment } from './comment.model';
export declare class CommentLike extends Model<CommentLike> {
    id: number;
    comment_id: number;
    user_id: number;
    photo: Comment;
}
