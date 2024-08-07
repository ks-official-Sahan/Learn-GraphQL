import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { RequestDataUserDTO, ResponseDataUserDTO, UserDTO } from './dto';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => ResponseDataUserDTO)
  // @Mutation(() => String)
  async signIn(
    @Args('userDto') userDto: RequestDataUserDTO,
  ): Promise<ResponseDataUserDTO> {
    const user = await this.userService.signIn(userDto);
    return user;
    // return "userDto.email";
  }
}
