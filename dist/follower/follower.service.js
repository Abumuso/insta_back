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
exports.FollowerService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const follower_model_1 = require("./model/follower.model");
const user_model_1 = require("../users/model/user.model");
let FollowerService = exports.FollowerService = class FollowerService {
    constructor(followerRepo) {
        this.followerRepo = followerRepo;
    }
    follow(userId, followerId) {
        return this.followerRepo.create({
            user_id: userId,
            subscribed_user_id: followerId,
        });
    }
    unFollow(userId, followerId) {
        return this.followerRepo.destroy({
            where: {
                user_id: userId,
                subscribed_user_id: followerId,
            },
        });
    }
    findFollowing(id) {
        return this.followerRepo.findAll({
            where: {
                user_id: id,
            },
            include: {
                all: true,
            },
        });
    }
    findFollower(id) {
        return this.followerRepo.findAll({
            where: {
                subscribed_user_id: id,
            },
            include: [user_model_1.User],
        });
    }
};
exports.FollowerService = FollowerService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(follower_model_1.Follower)),
    __metadata("design:paramtypes", [Object])
], FollowerService);
//# sourceMappingURL=follower.service.js.map