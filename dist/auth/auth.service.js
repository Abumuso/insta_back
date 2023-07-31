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
exports.AuthService = void 0;
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("./../users/users.service");
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
let AuthService = exports.AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async signUp(registerAuthDto) {
        console.log(1);
        const oldUser = await this.usersService.getUserByUsername(registerAuthDto.username);
        if (oldUser) {
            throw new common_1.HttpException('Username already taken', common_1.HttpStatus.BAD_REQUEST);
        }
        const hashedPassword = await bcrypt.hash(registerAuthDto.password, 10);
        const user = await this.usersService.create({
            ...registerAuthDto,
            password: hashedPassword,
        });
        return this.generateToken(user);
    }
    async signIn(loginAuthDto) {
        const user = await this.validateUser(loginAuthDto);
        if (!user) {
            throw new common_1.HttpException('User not found', common_1.HttpStatus.NOT_FOUND);
        }
        return this.generateToken(user);
    }
    async validateUser(loginAuthDto) {
        const user = await this.usersService.getUserByUsername(loginAuthDto.username);
        if (!user) {
            throw new common_1.UnauthorizedException('Username not found');
        }
        const validPassword = await bcrypt.compare(loginAuthDto.password, user.password);
        if (!validPassword) {
            throw new common_1.UnauthorizedException('Passwords do not match');
        }
        return user;
    }
    async generateToken(user) {
        const payload = { username: user.username, id: user.id, roles: user.roles };
        const accessToken = this.jwtService.sign(payload, {
            expiresIn: 15000,
        });
        const refreshToken = this.jwtService.sign(payload, {
            expiresIn: process.env.REFRESH_TIME,
            secret: process.env.REFRESH_SECRET,
        });
        return {
            accessToken,
            refreshToken,
        };
    }
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map