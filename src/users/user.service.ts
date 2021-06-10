import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/input/create-user.input';
import { User } from './models/users';
import { UpdateUserInput } from './dto/input/update-user.input';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model } from 'mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  public async createUser(createUserData: CreateUserInput): Promise<User> {
    return await this.userModel.create(createUserData);
  }

  async findById(id: string): Promise<User> {
    return await this.userModel.findById(id);
  }

  async findOne(query: FilterQuery<User>): Promise<User> {
    return this.userModel.findOne(query).exec();
  }

  async findAll(): Promise<User[]> {
    return await this.userModel.find().exec();
  }

  async findByName(name: string): Promise<User[]> {
    return await this.userModel
      .find({ name: { $regex: name, $options: 'i' } })
      .exec();
  }

  async updateUser(updateUserData: UpdateUserInput): Promise<User> {
    return await this.userModel.findByIdAndUpdate(
      updateUserData.id,
      updateUserData,
      { new: true },
    );
  }

  async deleteUser(id: string): Promise<User> {
    return await this.userModel.findByIdAndRemove(id);
  }
}
