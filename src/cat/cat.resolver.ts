import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CatService } from './cat.service';
import { CatFilterArgs } from './dto/args/cat-filter.args';
import { GetCatArgs } from './dto/args/get-cat.args';
import { GetCatsArgs } from './dto/args/get-cats.args';
import { CreateCatInput } from './dto/input/create-cat.input';
import { DeleteCatInput } from './dto/input/delete-cat.input';
import { UpdateCatInput } from './dto/input/update-cat.input';
import { Cat } from './models/cat';

@Resolver(() => Cat)
export class CatResolver {
  constructor(private readonly catService: CatService) {}

  @Query(() => Cat, { name: 'cat' })
  async getCat(@Args() getCatArgs: GetCatArgs): Promise<Cat> {
    return this.catService.getCat(getCatArgs);
  }

  @Query(() => [Cat], { name: 'catByName' })
  async getCatByName(@Args() catFilterArgs: CatFilterArgs): Promise<Cat[]> {
    return this.catService.findByName(catFilterArgs.name);
  }

  // all cats
  @Query(() => [Cat])
  async cats() {
    return this.catService.find();
  }

  // create cat
  @Mutation(() => Cat)
  async createCat(
    @Args('createCatInput') createCatInput: CreateCatInput,
  ): Promise<Cat> {
    return this.catService.createCat(createCatInput);
  }

  // update cat
  @Mutation(() => Cat)
  async updateCat(
    @Args('updateCatInput') updateCatInput: UpdateCatInput,
  ): Promise<Cat> {
    return this.catService.updateCat(updateCatInput);
  }

  // kill a cat
  @Mutation(() => Cat)
  async deleteCat(@Args('deleteCatInput') deleteCatInput: DeleteCatInput) {
    return this.catService.deleteCat(deleteCatInput);
  }
}
