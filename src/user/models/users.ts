import { Extensions, Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const UserSchema = new mongoose.Schema({
  firstName: { type: String, default: '' },
  lastName: { type: String, default: '' },
  email: { type: String, default: '' },
  age: { type: Number, default: 31 },
});

@ObjectType()
export class User extends Document {
  @Field(() => ID)
  readonly id?: string;

  @Field()
  firstName: string;
  @Field()
  lastName: string;
  @Field()
  email: string;
  @Field(() => Int)
  age?: number;
}
