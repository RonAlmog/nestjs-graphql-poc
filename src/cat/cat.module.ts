import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatResolver } from './cat.resolver';
import { DatabaseModule } from 'src/database/database.module';
import { catProviders } from './cat.providers';

@Module({
  imports: [DatabaseModule],
  providers: [CatService, CatResolver, ...catProviders],
})
export class CatModule {}
