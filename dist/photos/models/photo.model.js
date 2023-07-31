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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Photo = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const user_photo_model_1 = require("./user-photo.model");
const user_model_1 = require("../../users/model/user.model");
const asset_model_1 = require("../../assets/model/asset.model");
const comment_model_1 = require("../../comment/models/comment.model");
let Photo = exports.Photo = class Photo extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }),
    __metadata("design:type", String)
], Photo.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(120),
        allowNull: false,
    }),
    __metadata("design:type", String)
], Photo.prototype, "title", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.TEXT,
        allowNull: false,
    }),
    __metadata("design:type", String)
], Photo.prototype, "link", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsToMany)(() => user_model_1.User, () => user_photo_model_1.UserPhoto),
    __metadata("design:type", Array)
], Photo.prototype, "users", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => asset_model_1.Asset),
    __metadata("design:type", Array)
], Photo.prototype, "assets", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => comment_model_1.Comment),
    __metadata("design:type", Array)
], Photo.prototype, "comments", void 0);
exports.Photo = Photo = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'photo' })
], Photo);
//# sourceMappingURL=photo.model.js.map