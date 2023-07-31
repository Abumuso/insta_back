import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './models/comment.model';
import { CommentLike } from './models/comment-likes.model';
export declare class CommentService {
    private readonly commentRepo;
    private readonly commentLikeRepo;
    constructor(commentRepo: typeof Comment, commentLikeRepo: typeof CommentLike);
    create(createCommentDto: CreateCommentDto): Promise<Comment>;
    findAll(): Promise<Comment[]>;
    findOne(id: number): Promise<Comment>;
    likeComment(id: number, userId: number): Promise<{
        message: string;
    }>;
    findByPhotoId(id: number): Promise<Comment[]>;
    update(id: number, updateCommentDto: UpdateCommentDto): Promise<Comment | {
        msg: string;
    }>;
    remove(id: number): Promise<{
        msg: string;
    }>;
}
