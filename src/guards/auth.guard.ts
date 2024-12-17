import { CanActivate, ExecutionContext, UnauthorizedException } from "@nestjs/common";
import { Observable } from "rxjs";

export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest()
        if(request.headers.auth_token === "123"){
            request.body.user = "Ali Sher Khan"
            return true;
        }
        throw new UnauthorizedException("You are not authorized to visit this api. And yeah FUCK YOUUUUUU!!!!!!!!!!!!")
    }
}