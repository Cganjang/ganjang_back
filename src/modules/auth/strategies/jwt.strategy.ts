import { StaffRepository } from '@/modules/staff/staff.repository';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private readonly staffRepository: StaffRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: process.env.JWT_SECRET as string,
      ignoreExpiration: false,
    });
  }

  async validate(payload: any) {
    const { id } = payload;
    const user = await this.staffRepository.findStaffById(id);

    if (!user) {
      throw new UnauthorizedException('Not found User');
    }

    return user;
  }
}
