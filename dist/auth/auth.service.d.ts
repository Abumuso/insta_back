import { RegisterAuthDto } from './dto/register-auth.dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from './../users/users.service';
import { LoginAuthDto } from './dto/login-auth.dto';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    signUp(registerAuthDto: RegisterAuthDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    signIn(loginAuthDto: LoginAuthDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    private validateUser;
    private generateToken;
}
