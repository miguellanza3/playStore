import { Component } from '@angular/core'
    @Component({
        selector: 'movie-cmp',
        templateUrl: './movie.component.html',
        styleUrls: ['./movie.component.scss']
})

export class MoviesComponent {
    movieDetail: any;
    moviesModel: any = {
        movies: [
            {
                title: "Dreamgirls",
                gender: "Drama",
                price: 74,
                description: "Director Bill Condon brings Tom Eyen's Tony award-winning Broadway musical to the big screen in a tale of dreams, stardom, and the high cost of success in the cutthroat recording industry.",
                linkImg: "https://play-lh.googleusercontent.com/Dz5NXB_I7WjyB2q-qy_bUhDSsIiPqYJzy45NIxf2mZ7-JPQVglfoZJnw2BXXWlIvpKih=w200-h300-rw"
            },
            {
                title: "Estado Mental",
                gender: "Drama",
                price: 99,
                description: "El doctor Alan Stone (Richard Gere) encontró a Jesús... tres veces. Stone es un psiquiatra con la tarea de darle tratamiento a tres pacientes con esquizofrenia paranoide, todos los cuales creen ser Jesucristo. (Peter Dinklage, Bradley Whitford y Walton Goggins).",
                linkImg: "https://play-lh.googleusercontent.com/EL74cgIfyrfG1uWI-tSdqYasFyQ1iSXtlYYLRcZti8HIig2uDDy620w2VPF09mhtvXjNmduhk2G1MIhCQNkM=w200-h300-rw"
            },
            {
                title: "Ana",
                gender: "Comedia",
                price: 74,
                description: "Ana conoce a Rafa en un encuentro casual y se embarcan en un viaje para intentar salvarlo de la bancarrota o algo peor.",
                linkImg: "https://play-lh.googleusercontent.com/6N0ixrkPj8Cwt1K07KXstnUoLpYrMIwns63BR5k3Nc284FktMMWEvoNrro1uph9tCDDPYFbcvchcptxV0PKl=w200-h300-rw"
            },
        ]
    }

    viewMovieDetail(movie:any):void{
        this.movieDetail = movie;
    }

}