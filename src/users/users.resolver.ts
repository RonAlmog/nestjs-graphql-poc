import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { GetUserArgs } from './dto/args/get-user.args';
import { GetUsersArgs } from './dto/args/get-users.args';
import { User } from './models/users';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private userService: UsersService) {}

  @Query(() => User, { name: 'user', nullable: true })
  getUser(@Args() getUserArgs: GetUserArgs): User {
    return this.userService.getUser();
  }

  @Query(() => [User], { name: 'users', nullable: 'items' })
  getUsers(@Args() getUsersArgs: GetUsersArgs): User[] {
    return this.userService.getUsers();
  }

  @Mutation(() => User)
  createUser(): User {
    return this.userService.getUser();
  }
}
