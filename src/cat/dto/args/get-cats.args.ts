import { ArgsType, Field } from '@nestjs/graphql';
import { IsArray } from 'class-validator';

@ArgsType()
export class GetCatsArgs {
  @Field(() => [String])
  @IsArray()
  ids: string[];
}
