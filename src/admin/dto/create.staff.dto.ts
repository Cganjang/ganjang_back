import { StaffRole, StaffRoleType } from '@/types';
import { IsEnum, IsNotEmpty, IsNumber, IsString, MinLength } from 'class-validator';

export class CreateStaffDto {
  @IsString()
  @IsNotEmpty()
  readonly account: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(8, { message: '비밀번호는 최소 8자 이상이어야 합니다.' })
  readonly password: string;

  @IsNotEmpty()
  @IsNumber()
  readonly branchId: number;

  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsEnum(StaffRole)
  @IsNotEmpty()
  readonly roleId: StaffRoleType;
}
