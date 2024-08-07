import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class RequestDataUserDTO {
  //   @IsNotEmpty()
  //   @IsString()
  @Field()
  password: string;

  //   @IsNotEmpty()
  //   @IsEmail()
  @Field()
  email: string;
}
