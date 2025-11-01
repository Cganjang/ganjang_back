import { StaffService } from '@/modules/staff/staff.service';
import { Controller } from '@nestjs/common';

@Controller('staff')
export class StaffController {
  constructor(private readonly staffService: StaffService) {}
}
