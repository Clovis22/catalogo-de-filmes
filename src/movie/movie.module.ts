import { Module } from '@nestjs/common';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieEntity } from './entities/movie.entity';
import { CacheModule } from 'src/cache/cache.module';

@Module({
  imports: [
    CacheModule,
    TypeOrmModule.forFeature([MovieEntity])
  ],
  controllers: [MovieController],
  providers: [MovieService]
})
export class MovieModule {}
