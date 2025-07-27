import { User } from "@/modules/users/entities/user.entity";
import { DataSource, Repository } from "typeorm";

export class UserRepository extends Repository<User> {
  constructor(dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async findAll() {
    return this.findAll();
  }
}
