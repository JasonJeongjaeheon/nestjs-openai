import { EntityRepository, Repository } from 'typeorm';
import { AuthCredentialsDto } from './dto/authCredential.dto';
import { User } from '../entities/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const { email, password } = authCredentialsDto;
    const user = this.create({ email, password });
    await this.save(user);
  }
}
