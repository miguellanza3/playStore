import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { NewPageComponent } from './features/router-apps/new-page-app.component';
import { NewPageBookComponent } from './features/router-book/new-page-movie.component';
import { HomePageComponent } from './features/router-home/page-home.component';
import { NewPageMovieComponent } from './features/router-movies/new-page-movies.component';

const routes: Routes = [
    {
    path: 'home',
    component: HomePageComponent,
    },
    {
    path: 'new-App',
    component: NewPageComponent,
    },
    {
    path: 'new-movie',
    component: NewPageMovieComponent,
    },
    {
    path: 'new-book',
    component: NewPageBookComponent,
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];

    @NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule],
    })

    export class AppRoutinModule {}