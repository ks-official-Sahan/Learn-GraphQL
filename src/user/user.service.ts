import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { RequestDataUserDTO, ResponseDataUserDTO, UserDTO } from './dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async signIn(dto: RequestDataUserDTO): Promise<ResponseDataUserDTO> {
    const { email, password } = dto;

    try {
      const user = await this.prisma.user.findUnique({
        where: {
          email: email,
        },
      });

      //   console.log(user);
      if (!user) return;

      if (user.password !== password) return;

      delete user.password;
      const res = new ResponseDataUserDTO();
      res.email = user.email;
      res.id = user.id;

      // return user;
      return res;
    } catch (error) {
      console.log(error.message);
    }
  }
}
