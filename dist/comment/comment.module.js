"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentModule = void 0;
const common_1 = require("@nestjs/common");
const comment_service_1 = require("./comment.service");
const comment_controller_1 = require("./comment.controller");
const comment_model_1 = require("./models/comment.model");
const sequelize_1 = require("@nestjs/sequelize");
const comment_likes_model_1 = require("./models/comment-likes.model");
let CommentModule = exports.CommentModule = class CommentModule {
};
exports.CommentModule = CommentModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([comment_model_1.Comment, comment_likes_model_1.CommentLike])],
        controllers: [comment_controller_1.CommentController],
        providers: [comment_service_1.CommentService],
    })
], CommentModule);
//# sourceMappingURL=comment.module.js.map