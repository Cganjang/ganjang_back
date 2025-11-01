import { StaffRole, StaffRoleType, StaffStatus, StaffStatusType } from '@/types';
import { Exclude } from 'class-transformer';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('staff')
export class StaffEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: 'varchar',
    length: 50,
    unique: true,
    nullable: false,
  })
  account: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
    select: false,
  })
  @Exclude()
  password: string;

  @Column({
    type: 'int',
    nullable: false,
  })
  branch_id: number;

  @Column({
    type: 'varchar',
    length: 10,
    nullable: false,
  })
  name: string;

  @Column({
    type: 'int',
    nullable: false,
  })
  staff_role_id: StaffRoleType;

  @Column({
    type: 'enum',
    enum: StaffStatus,
    default: StaffStatus.ACTIVE,
  })
  status: StaffStatusType;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: true,
    default: null,
  })
  @Exclude()
  refresh_token: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
