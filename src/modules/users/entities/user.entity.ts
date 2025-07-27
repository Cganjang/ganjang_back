import { UserRole, UserStatus } from "@/types";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("users")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    type: "varchar",
    length: 50,
    unique: true,
    nullable: false,
  })
  account: string;

  @Column({
    type: "varchar",
    length: 255,
    nullable: false,
    select: false,
  })
  password: string;

  @Column({
    type: "enum",
    enum: UserStatus,
    default: UserStatus.ACTIVE,
    nullable: false,
  })
  status: UserStatus;

  name: string;

  phone: string;

  @Column({
    type: "enum",
    enum: UserRole,
    nullable: false,
  })
  role: UserRole;
}

// id int [pk, increment]
// account varchar(50)
// password varchar(255)
// name varchar(100)
// phone varchar(20)
// role varchar(30)
// refresh_token varchar(100)
// created_at timestamp
// updated_at timestamp
