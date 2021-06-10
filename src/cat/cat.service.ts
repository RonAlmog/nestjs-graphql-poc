import { Injectable } from '@nestjs/common';
import { CreateCatInput } from './dto/input/create-cat.input';
import { Cat } from './models/cat';
import { UpdateCatInput } from './dto/input/update-cat.input';
import { GetCatArgs } from './dto/args/get-cat.args';
import { GetCatsArgs } from './dto/args/get-cats.args';
import { DeleteCatInput } from './dto/input/delete-cat.input';
import { Model, FilterQuery } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class CatService {
  constructor(@InjectModel('Cat') private readonly catModel: Model<Cat>) {}

  async create(createCatInput: CreateCatInput): Promise<Cat> {
    return await this.catModel.create(createCatInput);
  }

  async findOne(query: FilterQuery<Cat>): Promise<Cat> {
    return this.catModel.findOne(query).lean();
  }

  async find(): Promise<Cat[]> {
    return await this.catModel.find().exec();
  }

  async findByName(name: string): Promise<Cat[]> {
    return await this.catModel
      .find({ name: { $regex: name, $options: 'i' } })
      .exec();
  }

  // ===================================================

  public createCat(createCatInput: CreateCatInput): Promise<Cat> {
    return this.catModel.create(createCatInput);
  }

  async updateCat(updateCatInput: UpdateCatInput): Promise<Cat> {
    return await this.catModel.findByIdAndUpdate(
      updateCatInput.id,
      updateCatInput,
    );
  }

  async getCat(getCatArgs: GetCatArgs): Promise<Cat> {
    return await this.catModel.findById(getCatArgs.id);
  }

  async deleteCat(deleteCatInput: DeleteCatInput): Promise<Cat> {
    return await this.catModel.findByIdAndRemove(deleteCatInput.id);
  }
}
