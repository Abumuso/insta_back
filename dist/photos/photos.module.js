"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotosModule = void 0;
const common_1 = require("@nestjs/common");
const photos_service_1 = require("./photos.service");
const photos_controller_1 = require("./photos.controller");
const sequelize_1 = require("@nestjs/sequelize");
const photo_model_1 = require("./models/photo.model");
const user_photo_model_1 = require("./models/user-photo.model");
let PhotosModule = exports.PhotosModule = class PhotosModule {
};
exports.PhotosModule = PhotosModule = __decorate([
    (0, common_1.Module)({
        imports: [sequelize_1.SequelizeModule.forFeature([photo_model_1.Photo, user_photo_model_1.UserPhoto])],
        controllers: [photos_controller_1.PhotosController],
        providers: [photos_service_1.PhotosService],
    })
], PhotosModule);
//# sourceMappingURL=photos.module.js.map