import { Injectable } from '@nestjs/common';
import { CreateCatInput } from './dto/input/create-cat.input';
import { Cat } from './models/cat';
import { v4 as uuidv4 } from 'uuid';
import { UpdateCatInput } from './dto/input/update-cat.input';
import { GetCatArgs } from './dto/args/get-cat.args';
import { GetCatsArgs } from './dto/args/get-cats.args';
import { DeleteCatInput } from './dto/input/delete-cat.input';

@Injectable()
export class CatService {
  private cats: Cat[] = [];
  public createCat(createCatInput: CreateCatInput): Cat {
    const cat: Cat = {
      id: uuidv4(),
      ...createCatInput,
    };
    this.cats.push(cat);
    return cat;
  }

  public updateCat(updateCatInput: UpdateCatInput): Cat {
    const cat = this.cats.find((cat) => cat.id === updateCatInput.id);
    Object.assign(cat, updateCatInput);
    return cat;
  }

  public getCat(getCatArgs: GetCatArgs): Cat {
    return this.cats.find((cat) => cat.id === getCatArgs.id);
  }

  public getCats(getCatsArgs: GetCatsArgs): Cat[] {
    return getCatsArgs.ids.map((id) => this.getCat({ id }));
  }

  public deleteCat(deleteCatInput: DeleteCatInput): Cat {
    const index = this.cats.findIndex((c) => c.id === deleteCatInput.id);
    const deletedCat = this.cats[index];
    this.cats.splice(index);
    return deletedCat;
  }
}
