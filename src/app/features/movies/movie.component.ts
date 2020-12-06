import { Component } from '@angular/core'
import {MOVIES_DATA} from '../../common/models/mocks/movie-data.mocks'

    @Component({
        selector: 'movie-cmp',
        templateUrl: './movie.component.html',
        styleUrls: ['./movie.component.scss']
})

export class MoviesComponent {
    movieDetail: any;
    moviesModel: any = MOVIES_DATA;

    viewMovieDetail(movie:any):void{
        this.movieDetail = movie;
    }

}