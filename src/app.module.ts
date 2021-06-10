import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './user/user.module';
import { CatModule } from './cat/cat.module';
import { MongooseModule } from '@nestjs/mongoose';

import { MONGO_DB_CONNECTION_STRING } from './constants';

@Module({
  imports: [
    MongooseModule.forRoot(MONGO_DB_CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),

    GraphQLModule.forRoot({
      autoSchemaFile: true, // in memory schema file. not physically generated. ('code first')
    }),
    UserModule,
    CatModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
