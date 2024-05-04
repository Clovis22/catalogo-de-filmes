import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CacheService } from 'src/cache/cache.service';
import { Repository } from 'typeorm';
import { MovieEntity } from './entities/movie.entity';

@Injectable()
export class MovieService {

    constructor(
        @InjectRepository(MovieEntity)
        private readonly movieRepository: Repository<MovieEntity>,
        private readonly cacheService: CacheService,
    ) {}

    async getMovieById(movieId: number): Promise<MovieEntity[]> {
        return this.cacheService.getCache<MovieEntity[]>(`state_${movieId}`, () =>
            this.movieRepository.find({
              where: {
                id: movieId,
              },
            }),
          );

    }

    async getAllMovie(): Promise<MovieEntity[]> {
        return this.movieRepository.find();
    }

}
