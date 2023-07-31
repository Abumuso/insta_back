"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const comment_model_1 = require("./models/comment.model");
const comment_likes_model_1 = require("./models/comment-likes.model");
let CommentService = exports.CommentService = class CommentService {
    constructor(commentRepo, commentLikeRepo) {
        this.commentRepo = commentRepo;
        this.commentLikeRepo = commentLikeRepo;
    }
    async create(createCommentDto) {
        const createdPhoto = await this.commentRepo.create(createCommentDto);
        return createdPhoto;
    }
    findAll() {
        return this.commentRepo.findAll();
    }
    findOne(id) {
        return this.commentRepo.findByPk(id);
    }
    async likeComment(id, userId) {
        const findByUserId = await this.commentLikeRepo.findOne({
            where: {
                comment_id: id,
                user_id: userId,
            },
        });
        if (findByUserId) {
            const deletedCount = await this.commentLikeRepo.destroy({
                where: {
                    id: findByUserId.id,
                },
            });
            if (deletedCount < 1) {
                throw new common_1.HttpException('Error while dislike', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
            }
            return {
                message: 'disliked successfully',
            };
        }
        await this.commentLikeRepo.create({
            user_id: userId,
            comment_id: id,
        });
        return {
            message: 'liked successfully',
        };
    }
    findByPhotoId(id) {
        return this.commentRepo.findAll({
            where: { photo_id: id },
        });
    }
    async update(id, updateCommentDto) {
        const [updatedCount, updatedUsers] = await this.commentRepo.update(updateCommentDto, { where: { id }, returning: true });
        if (updatedCount > 0)
            return updatedUsers[0];
        return { msg: 'Not found by given id' };
    }
    async remove(id) {
        const deletedCount = await this.commentRepo.destroy({
            where: { id },
        });
        if (deletedCount > 0)
            return { msg: 'deleted successfully' };
        return { msg: 'Not found by given id' };
    }
};
exports.CommentService = CommentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(comment_model_1.Comment)),
    __param(1, (0, sequelize_1.InjectModel)(comment_likes_model_1.CommentLike)),
    __metadata("design:paramtypes", [Object, Object])
], CommentService);
//# sourceMappingURL=comment.service.js.map