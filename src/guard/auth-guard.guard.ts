import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req: Request = context.switchToHttp().getRequest();

    // throw new NotFoundException('not doun');

    const token = req.headers.authorization;
    if (token === 'topvoldim') {
      return true;
    } else {
      return false;
    }
  }
}
