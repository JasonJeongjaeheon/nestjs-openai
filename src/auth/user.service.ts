import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { AuthCredentialsDto } from './dto/authCredential.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}
  async signUp(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    const isExistUser = this.userRepository.isExistUser(authCredentialsDto);
    if (!isExistUser) {
      return this.userRepository.createUser(authCredentialsDto);
    }
    return null;
  }
}
