import { User } from "@/modules/users/entities/user.entity";
import { Injectable } from "@nestjs/common";
import { DataSource, Repository } from "typeorm";

@Injectable()
export class AuthRepository {
  private readonly repository: Repository<User>;
  constructor(private readonly dataSource: DataSource) {
    this.repository = this.dataSource.getRepository(User);
  }

  async findAll() {
    this.repository.find();
  }
}
