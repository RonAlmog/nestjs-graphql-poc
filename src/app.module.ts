import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersModule } from './users/users.module';
import { CatModule } from './cat/cat.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true, // in memory schema file. not physically generated. ('code first')
    }),
    UsersModule,
    CatModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
