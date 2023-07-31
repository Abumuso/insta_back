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
exports.PhotosService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const photo_model_1 = require("./models/photo.model");
const user_model_1 = require("../users/model/user.model");
let PhotosService = exports.PhotosService = class PhotosService {
    constructor(photoRepo) {
        this.photoRepo = photoRepo;
    }
    async create(createUserDto) {
        const { users, ...newPhoto } = createUserDto;
        const createdPhoto = await this.photoRepo.create(newPhoto, {
            include: [user_model_1.User],
        });
        await createdPhoto.$set('users', users);
        return createdPhoto;
    }
    findAll() {
        return this.photoRepo.findAll({ include: [user_model_1.User] });
    }
    findOne(id) {
        return this.photoRepo.findByPk(id, {
            include: {
                all: true,
                attributes: {
                    exclude: ['createdAt', 'updatedAt', 'UserPhoto'],
                },
            },
        });
    }
    findByUserId(id) {
        return this.photoRepo.findAll({
            include: {
                all: true,
                through: { attributes: [] },
                where: { id },
            },
        });
    }
    async update(id, updatePhotoDto) {
        const [updatedCount, updatedUsers] = await this.photoRepo.update(updatePhotoDto, { where: { id }, returning: true });
        if (updatedCount > 0)
            return updatedUsers[0];
        return { msg: 'Not found by given id' };
    }
    async remove(id) {
        const deletedCount = await this.photoRepo.destroy({
            where: { id },
        });
        if (deletedCount > 0)
            return { msg: 'deleted successfully' };
        return { msg: 'Not found by given id' };
    }
};
exports.PhotosService = PhotosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(photo_model_1.Photo)),
    __metadata("design:paramtypes", [Object])
], PhotosService);
//# sourceMappingURL=photos.service.js.map