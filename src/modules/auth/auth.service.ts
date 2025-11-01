import { StaffEntity } from '@/modules/staff/entities/staff.entity';
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async generateTokens(staff: StaffEntity): Promise<{
    accessToken: string;
    refreshToken: string;
  }> {
    const accessPayload = { id: staff.id, account: staff.account, roleId: staff.staff_role_id };
    const refreshPayload = { id: staff.id };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(accessPayload),
      this.jwtService.signAsync(refreshPayload, {
        secret: process.env.JWT_SECRET,
        expiresIn: '7d',
      }),
    ]);

    return { accessToken, refreshToken };
  }
}
