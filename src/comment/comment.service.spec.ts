import { Test, TestingModule } from '@nestjs/testing';
import { CommentService } from './comment.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { CommentController } from './comment.controller';
import { CommentLike } from './models/comment-likes.model';

describe('CommentsService', () => {
  let service: CommentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [SequelizeModule.forFeature([Comment, CommentLike])],
      controllers: [CommentController],
      providers: [CommentService],
    }).compile();

    service = module.get<CommentService>(CommentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
