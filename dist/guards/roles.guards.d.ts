import { JwtService } from '@nestjs/jwt/dist';
import { ExecutionContext, CanActivate } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';
export declare class RolesGuard implements CanActivate {
    private readonly jwtService;
    private readonly raflector;
    constructor(jwtService: JwtService, raflector: Reflector);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
