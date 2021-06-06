import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class DeleteCatInput {
  @Field()
  @IsNotEmpty()
  id: string;
}
