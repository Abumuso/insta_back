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
exports.RolesGuard = void 0;
const dist_1 = require("@nestjs/jwt/dist");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const roles_auth_decorator_1 = require("../decorators/roles-auth.decorator");
let RolesGuard = exports.RolesGuard = class RolesGuard {
    constructor(jwtService, raflector) {
        this.jwtService = jwtService;
        this.raflector = raflector;
    }
    canActivate(context) {
        const requiredRoles = this.raflector.getAllAndOverride(roles_auth_decorator_1.ROLES_KEY, [context.getHandler(), context.getClass]);
        if (!requiredRoles) {
            return true;
        }
        const req = context.switchToHttp().getRequest();
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            throw new common_1.UnauthorizedException({
                message: 'Token not found',
            });
        }
        const bearer = authHeader.split(' ')[0];
        const token = authHeader.split(' ')[1];
        if (bearer !== 'Bearer' || !token) {
            throw new common_1.UnauthorizedException({
                message: 'Token not found',
            });
        }
        let user;
        try {
            user = this.jwtService.verify(token, {
                secret: process.env.ACCESS_TOKEN_KEY,
            });
        }
        catch (error) {
            throw new common_1.UnauthorizedException({
                message: 'Token expired',
            });
        }
        if (!user.roles) {
            throw new common_1.UnauthorizedException({
                message: 'You are not authorized',
            });
        }
        const permittion = user.roles.some((role) => requiredRoles.includes(role.role.name));
        req.user = user;
        if (!permittion) {
            throw new common_1.UnauthorizedException({
                message: 'You are not authorized',
            });
        }
        return true;
    }
};
exports.RolesGuard = RolesGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [dist_1.JwtService,
        core_1.Reflector])
], RolesGuard);
//# sourceMappingURL=roles.guards.js.map