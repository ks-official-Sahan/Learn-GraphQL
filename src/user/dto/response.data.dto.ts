import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class ResponseDataUserDTO {
  @Field()
  id: string;

  @Field()
  email: string;
}
