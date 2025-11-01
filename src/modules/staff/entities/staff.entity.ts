import { StaffRole, StaffRoleType, StaffStatus, StaffStatusType } from '@/types';
import { Exclude } from 'class-transformer';
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
    type: 'enum',
    enum: StaffStatus,
    default: StaffStatus.ACTIVE,
    nullable: false,
  })
  status: StaffStatusType;

  @Column({
    type: 'varchar',
    length: 100,
    nullable: false,
  })
  name: string;

  @Column({
    type: 'varchar',
    length: 50,
    nullable: false,
  })
  phone: string;

  @Column({
    type: 'enum',
    enum: StaffRole,
    nullable: false,
  })
  role: StaffRoleType;

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

  @CreateDateColumn()
  updated_at: Date;
}
