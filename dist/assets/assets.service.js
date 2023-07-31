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
exports.AssetsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const asset_model_1 = require("./model/asset.model");
const path_1 = require("path");
const uuid_1 = require("uuid");
const promises_1 = require("fs/promises");
const fs_1 = require("fs");
let AssetsService = exports.AssetsService = class AssetsService {
    constructor(assetRepo) {
        this.assetRepo = assetRepo;
    }
    async create(createAssetDto, id) {
        return this.assetRepo.create({ ...createAssetDto, photo_id: id });
    }
    async upload(url) {
        const url_asset = (0, path_1.join)(__dirname, '..', 'public');
        const extension = url.originalname.split('.').slice(-1)[0];
        const isExists = (0, fs_1.existsSync)(url_asset);
        if (!isExists) {
            await (0, promises_1.mkdir)(url_asset, {
                recursive: true,
            });
        }
        const filePath = (0, uuid_1.v4)() + '.' + extension;
        await (0, promises_1.writeFile)((0, path_1.resolve)(url_asset, filePath), url.buffer);
        return {
            url: filePath,
            extension,
        };
    }
    findAll() {
        return `This action returns all assets`;
    }
    findOne(id) {
        return `This action returns a #${id} asset`;
    }
    update(id, updateAssetDto) {
        return `This action updates a #${id} asset`;
    }
    remove(id) {
        return `This action removes a #${id} asset`;
    }
};
exports.AssetsService = AssetsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(asset_model_1.Asset)),
    __metadata("design:paramtypes", [Object])
], AssetsService);
//# sourceMappingURL=assets.service.js.map