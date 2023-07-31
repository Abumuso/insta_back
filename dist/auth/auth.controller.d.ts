import { UsersService } from './../users/users.service';
import { AuthService } from './auth.service';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { LoginAuthDto } from './dto/login-auth.dto';
export declare class AuthController {
    private readonly authService;
    private readonly userService;
    constructor(authService: AuthService, userService: UsersService);
    signUp(registerAuthDto: RegisterAuthDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
    signIn(loginAuthDto: LoginAuthDto): Promise<{
        accessToken: string;
        refreshToken: string;
    }>;
}
