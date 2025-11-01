import { CreateStaffDto } from '@/modules/staff/dto/create-staff.dto';
import { StaffService } from '@/modules/staff/staff.service';
import { Body, Controller, Post, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('staff')
export class StaffController {
  constructor(private readonly staffService: StaffService) {}

  @Post('new')
  async createStaff(@Body() createStaffDto: CreateStaffDto, @Res({ passthrough: true }) res: Response) {
    const { staff, access_token, refresh_token } = await this.staffService.createStaff(createStaffDto);

    res.cookie('refresh_token', refresh_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return { staff, access_token };
  }
}
