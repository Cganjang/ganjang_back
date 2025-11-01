import { Body, Controller, Post, Res } from '@nestjs/common';
import { AdminService } from './admin.service';
import { Response } from 'express';
import { CreateStaffDto } from '@/admin/dto/create.staff.dto';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post('new')
  async createStaff(@Body() createStaffDto: CreateStaffDto, @Res({ passthrough: true }) res: Response) {
    const { staff, access_token, refresh_token } = await this.adminService.createStaff(createStaffDto);

    res.cookie('refresh_token', refresh_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    return { staff, access_token };
  }
}
