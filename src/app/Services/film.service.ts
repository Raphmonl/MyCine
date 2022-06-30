import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Film } from '../classes/film';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private _httpClient: HttpClient) { }

  getFilm() : Observable<Film[]> {

    return this._httpClient.get<Array<Film>>(environment.baseUri + "/films");

  }

  getLastId() : Observable<number> {
    return this._httpClient.get<number>(environment.baseUri + "/films?_order=desc/1");
  }

  addFilm(f1: Film) : Observable<Film> {

    return this._httpClient.post<Film>(environment.baseUri + "/films", f1);

  }

  deleteFilm(id : number) : Observable<unknown>{

    return this._httpClient.delete(environment.baseUri + "/films/" + id);

  }

  editFilm(f2: Film) : Observable<Film> {

    this._httpClient.delete(environment.baseUri + "/films/" + f2.id).subscribe(response => {
      //this._httpClient.get<String>(environment.baseUri + "/films/" + f2.titre)
    });
    return this._httpClient.post<Film>(environment.baseUri + "/films", f2);

  }




}

