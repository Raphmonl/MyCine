import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Film } from '../classes/film';
import { FilmService } from '../Services/film.service';

@Component({
  selector: 'app-my-films',
  templateUrl: './my-films.component.html',
  styleUrls: ['./my-films.component.css']
})
export class MyFilmsComponent implements OnInit {


  @Output() rate = new EventEmitter();



  constructor(private filmService : FilmService) { }

  filmList: Array<Film> = [];

 

  supprimerFilm(film:Film) {
    this.filmService.deleteFilm(film.id).subscribe(response => {
      window.location.reload();
    });
  }

  editFilm(film:Film) {
    this.rate.emit(film);
  }


  ngOnInit(): void {
    this.filmService.getFilm().subscribe(response => {
      this.filmList = response;
    });
  }

}
