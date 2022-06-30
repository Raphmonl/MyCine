import { Component } from '@angular/core';
import { AddOrEditFilmComponent } from './add-or-edit-film/add-or-edit-film.component';
import { Film } from './classes/film';
import { MyFilmsComponent } from './my-films/my-films.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyCine';


  films: Array<Film> = [];

  editedFilm!: Film;


  AddOrEditFilm(newFilms: Film) {
    this.films.push(newFilms);
    console.log(this.films);
  }

  editFilm(film: Film) {
    this.editedFilm = film;
    console.log(this.editedFilm);
  }

}