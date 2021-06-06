import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CatService } from './cat.service';
import { GetCatArgs } from './dto/args/get-cat.args';
import { GetCatsArgs } from './dto/args/get-cats.args';
import { CreateCatInput } from './dto/input/create-cat.input';
import { DeleteCatInput } from './dto/input/delete-cat.input';
import { UpdateCatInput } from './dto/input/update-cat.input';
import { Cat } from './models/cat';

@Resolver(() => Cat)
export class CatResolver {
  constructor(private readonly catService: CatService) {}

  @Query(() => Cat, { name: 'cat', nullable: true })
  async getCat(@Args() getCatArgs: GetCatArgs): Promise<Cat> {
    return this.catService.getCat(getCatArgs);
  }

  @Query(() => [Cat], { name: 'allcats', nullable: 'items' })
  async getAllCats(): Promise<Cat[]> {
    return this.catService.getAllCats();
  }

  @Query(() => [Cat], { name: 'cats', nullable: 'items' })
  async getCats(@Args() getCatsArgs: GetCatsArgs): Promise<Cat[]> {
    return this.catService.getCats(getCatsArgs);
  }

  @Mutation(() => Cat)
  async createCat(
    @Args('createCatInput') createCatInput: CreateCatInput,
  ): Promise<Cat> {
    return this.catService.createCat(createCatInput);
  }

  @Mutation(() => Cat)
  async updateCat(
    @Args('updateCatInput') updateCatInput: UpdateCatInput,
  ): Promise<Cat> {
    return this.catService.updateCat(updateCatInput);
  }

  @Mutation(() => Cat)
  async deleteCat(@Args('deleteCatInput') deleteCatInput: DeleteCatInput) {
    return this.catService.deleteCat(deleteCatInput);
  }
}
