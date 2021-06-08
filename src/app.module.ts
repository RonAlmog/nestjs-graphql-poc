import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { DatabaseModule } from './database/database.module';
import { databaseProviders } from './database/database.providers';
//
import { UsersModule } from './users/users.module';
import { CatModule } from './cat/cat.module';

import { catProviders } from './cat/cat.providers';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true, // in memory schema file. not physically generated. ('code first')
    }),
    UsersModule,
    CatModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [...databaseProviders, ...catProviders],
})
export class AppModule {}
