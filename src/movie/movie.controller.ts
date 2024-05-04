import { Controller, Get, Param } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieEntity } from './entities/movie.entity';

@Controller('movie')
export class MovieController {

    constructor( private readonly movieService: MovieService ) {}

    @Get('/:movieId')
    async getMovieById(@Param('movieId') movieId: number):Promise<MovieEntity[]> {
        return this.movieService.getMovieById(movieId);
    }

    @Get()
    async getAllMovie(): Promise<MovieEntity[]> {
        return this.movieService.getAllMovie();
    }

}
