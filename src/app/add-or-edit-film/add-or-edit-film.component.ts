import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Output, EventEmitter } from '@angular/core';
import { Film } from '../classes/film';
import { FilmService } from '../Services/film.service';

@Component({
  selector: 'app-add-or-edit-film',
  templateUrl: './add-or-edit-film.component.html',
  styleUrls: ['./add-or-edit-film.component.css']
})
export class AddOrEditFilmComponent implements OnInit {

  constructor(private filmService : FilmService) { }

  @Output() newFilmEvent = new EventEmitter<Film>();
  /*@Input("filmUpdating") set setFilmUpdating(film: Film) {
    //TODO pré remplir le formulaire
    this.filmForm.pathValue({
      titre: film.titre,
      synopsis: film.synopsis,
      note: film.note,
      id: film.id
      })
    }*/

  film!:Film;

  filmForm = new FormGroup({
    titre: new FormControl('', Validators.required),
    synopsis: new FormControl(''),
    note: new FormControl<number | null>(null, [Validators.min(1), Validators.max(10)]),
    id: new FormControl<number>(0, Validators.required)
    /*note: new FormControl(''),*/
  });

  soumettreFilm() {
    console.log(this.filmForm.value);
    let i = 0;
    this.filmService.getLastId().subscribe(response => {
        i = response;
    });
    this.film = {
      titre: this.filmForm.controls.titre.value || '',
      note: this.filmForm.controls.note.value,
      synopsis: this.filmForm.controls.synopsis.value || '',
      id: i
    }
    this.filmService.addFilm(this.film).subscribe(response => {
      window.location.reload();
    });
  }



  ngOnInit(): void {
    
  }

}

