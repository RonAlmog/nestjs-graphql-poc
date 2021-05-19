import { Field, Int, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@ObjectType()
export class User {
  @Field()
  @IsNotEmpty()
  userId: string;

  @Field()
  email: string;

  @Field(() => Int)
  @IsOptional()
  @IsNotEmpty()
  age?: number;

  @Field({ nullable: true })
  @IsOptional()
  isSubscribed?: boolean;
}
