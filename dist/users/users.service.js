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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const user_model_1 = require("./model/user.model");
let UsersService = exports.UsersService = class UsersService {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    create(createUserDto) {
        return this.userRepo.create(createUserDto);
    }
    findAll() {
        return this.userRepo.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt'],
            },
            include: {
                all: true,
                attributes: {
                    exclude: ['createdAt', 'updatedAt'],
                },
                through: { attributes: [] },
            },
        });
    }
    findOne(id) {
        return this.userRepo.findByPk(id, {
            include: {
                all: true,
                attributes: {
                    exclude: ['createdAt', 'updatedAt', 'UserPhoto'],
                },
                through: { attributes: [] },
            },
        });
    }
    async getUserByUsername(username) {
        const user = await this.userRepo.findOne({
            where: { username },
            include: {
                all: true,
                attributes: {
                    exclude: ['createdAt', 'updatedAt', 'UserPhoto'],
                },
                through: { attributes: [] },
            },
        });
        return user;
    }
    async update(id, updateUserDto) {
        const [updatedCount, updatedUsers] = await this.userRepo.update(updateUserDto, { where: { id }, returning: true });
        if (updatedCount > 0)
            return updatedUsers[0];
        return { msg: 'Not found by given id' };
    }
    async remove(id) {
        const deletedCount = await this.userRepo.destroy({
            where: { id },
        });
        if (deletedCount > 0)
            return { msg: 'deleted successfully' };
        return { msg: 'Not found by given id' };
    }
};
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(user_model_1.User)),
    __metadata("design:paramtypes", [Object])
], UsersService);
//# sourceMappingURL=users.service.js.map