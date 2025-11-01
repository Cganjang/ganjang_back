import { CreateStaffDto } from '@/modules/staff/dto/create-staff.dto';
import { StaffEntity } from '@/modules/staff/entities/staff.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StaffRepository {
  constructor(
    @InjectRepository(StaffEntity)
    private readonly staffEntityRepository: Repository<StaffEntity>,
  ) {}

  async findAll() {
    return this.staffEntityRepository.find();
  }

  async findStaffById(id: number): Promise<StaffEntity | null> {
    return this.staffEntityRepository.findOneBy({ id });
  }

  async findStaffByAccount(account: string): Promise<StaffEntity | null> {
    return this.staffEntityRepository.findOneBy({ account });
  }

  async createStaff(createStaffDto: CreateStaffDto): Promise<StaffEntity> {
    const newStaff = this.staffEntityRepository.create(createStaffDto);

    return this.staffEntityRepository.save(newStaff);
  }

  async updateRefreshToken(staffId: number, refreshToken: string): Promise<void> {
    await this.staffEntityRepository.update(staffId, {
      refresh_token: refreshToken,
    });
  }
}
