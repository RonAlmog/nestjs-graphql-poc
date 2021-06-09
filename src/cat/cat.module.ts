import { Module } from '@nestjs/common';
import { CatService } from './cat.service';
import { CatResolver } from './cat.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { CatSchema } from './models/cat';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }])],
  providers: [CatService, CatResolver],
})
export class CatModule {}
