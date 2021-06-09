import { Extensions, Field, ID, Int, ObjectType } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';

export const CatSchema = new mongoose.Schema({
  name: String,
  age: Number,
  color: String,
});

@ObjectType()
export class Cat extends Document {
  @Field(() => ID)
  readonly id?: string;
  @Field()
  name: string;
  @Field(() => Int)
  age: number;
  @Field({ nullable: true })
  @Extensions({ role: 'admin' })
  color: string;
}
