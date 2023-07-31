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
exports.Asset = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const photo_model_1 = require("../../photos/models/photo.model");
let Asset = exports.Asset = class Asset extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    }),
    __metadata("design:type", Number)
], Asset.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(120),
        allowNull: false,
    }),
    __metadata("design:type", String)
], Asset.prototype, "url", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(120),
        allowNull: false,
    }),
    __metadata("design:type", String)
], Asset.prototype, "extension", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => photo_model_1.Photo),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    }),
    __metadata("design:type", Number)
], Asset.prototype, "photo_id", void 0);
exports.Asset = Asset = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'asset' })
], Asset);
//# sourceMappingURL=asset.model.js.map