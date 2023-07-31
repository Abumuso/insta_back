import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
export declare class CommentController {
    private readonly commentService;
    constructor(commentService: CommentService);
    create(createCommentDto: CreateCommentDto): Promise<import("./models/comment.model").Comment>;
    findAll(): Promise<import("./models/comment.model").Comment[]>;
    likeComment(id: string, req: Request): Promise<{
        message: string;
    }>;
    findOne(id: string): Promise<import("./models/comment.model").Comment>;
    findByPhotoId(id: string): Promise<import("./models/comment.model").Comment[]>;
    update(id: string, updateCommentDto: UpdateCommentDto): Promise<import("./models/comment.model").Comment | {
        msg: string;
    }>;
    remove(id: string): Promise<{
        msg: string;
    }>;
}
