import { ArgsType, Field } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

@ArgsType()
export class CatFilterArgs {
  @Field({ nullable: true })
  @IsOptional()
  name: string;

  @Field({ nullable: true })
  @IsOptional()
  age?: number;

  @Field({ nullable: true })
  @IsOptional()
  color?: string;
}
