import { CreateStaffDto } from '@/admin/dto/create.staff.dto';
import { AuthService } from '@/modules/auth/auth.service';
import { StaffEntity } from '@/modules/staff/entities/staff.entity';
import { StaffRepository } from '@/modules/staff/staff.repository';
import { ConflictException, Injectable } from '@nestjs/common';
import * as bcrypt from '@node-rs/bcrypt';

@Injectable()
export class AdminService {
  constructor(
    private readonly staffRepository: StaffRepository,
    private readonly authService: AuthService,
  ) {}

  /**
   * @todo - createStaff와 refreshToken transaction 묶기
   */
  async createStaff(createStaffDto: CreateStaffDto): Promise<{
    staff: StaffEntity;
    access_token: string;
    refresh_token: string;
  }> {
    const { password, account, ...rest } = createStaffDto;

    const existingStaff = await this.staffRepository.findStaffByAccount(account);
    if (existingStaff) {
      throw new ConflictException('이미 가입된 계정입니다.');
    }

    const saltRound = 11;
    const hashedPass = await bcrypt.hash(password, saltRound);

    const newStaff = await this.staffRepository.createStaff({
      ...rest,
      account,
      password: hashedPass,
    });

    const { accessToken, refreshToken } = await this.authService.generateTokens(newStaff);

    const hashedRefreshToken = await bcrypt.hash(refreshToken, saltRound);

    await this.staffRepository.updateRefreshToken(newStaff.id, hashedRefreshToken);

    return { staff: newStaff, access_token: accessToken, refresh_token: refreshToken };
  }
}
