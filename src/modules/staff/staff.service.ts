import { StaffRepository } from '@/modules/staff/staff.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class StaffService {
  constructor(private readonly staffRepository: StaffRepository) {}
}
