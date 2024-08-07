import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserDTO {
  @Field()
  id: string;

  @Field()
  email: string;

  @Field()
  password: string;
}
