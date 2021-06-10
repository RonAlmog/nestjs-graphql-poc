import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { GetUserArgs } from './dto/args/get-user.args';
import { CreateUserInput } from './dto/input/create-user.input';
import { UpdateUserInput } from './dto/input/update-user.input';
import { User } from './models/users';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => User, { name: 'user' })
  async getCat(@Args() getUserArgs: GetUserArgs): Promise<User> {
    return await this.userService.findOne(getUserArgs);
  }

  @Query(() => User, { name: 'userByName', nullable: true })
  async getUser(@Args() getUserArgs: GetUserArgs): Promise<User[]> {
    return await this.userService.findByName(getUserArgs.firstName);
  }

  @Query(() => [User], { name: 'allusers', nullable: 'items' })
  async getUsers(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Mutation(() => User)
  async createUser(
    @Args('createUserData') createUserData: CreateUserInput,
  ): Promise<User> {
    return this.userService.createUser(createUserData);
  }

  @Mutation(() => User)
  async updateUser(
    @Args('updateUserData') updateUserData: UpdateUserInput,
  ): Promise<User> {
    return this.userService.updateUser(updateUserData);
  }

  @Mutation(() => User)
  async deleteUser(@Args('id') id: string): Promise<User> {
    return this.userService.deleteUser(id);
  }
}
