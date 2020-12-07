import { Component } from '@angular/core'
import { Movie } from 'src/app/common/models/Movie.model';

    @Component({
        selector: 'newMovie-cmp',
        templateUrl: './new-page-movie.component.html'
    })

export class NewPageMovieComponent{
    movies: Movie={
        title: '',
        gender: '',
        price: 0,
        description: '',
        linkImg: ''
    }

    save(): void{
        console.log(this.movies)
    }

}