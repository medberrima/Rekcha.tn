import { Injectable } from '@angular/core';
import { Film } from '../model/Film.model';

@Injectable({
  providedIn: 'root'
})
export class FilmService {
  films: Film[];

  constructor() { 
    this.films = [
      {idFilm : 1,
        nomFilm : "The Social Dilemma",
        dateSortie : new Date("09/09/2020") ,
        genreFilm : "Docus sciences et nature" 
      },
      {idFilm : 3,
        nomFilm : "joker",
        dateSortie : new Date("08/31/2019") ,
        genreFilm : "thriller psychologique" 
      },
      {idFilm : 2,
        nomFilm : "The founder",
        dateSortie : new Date("10/16/2016") ,
        genreFilm : "drame biographique" 
      }
    ];
  }

  listeFilms() : Film[] {
    return this.films;
  }

  ajoutFilm(f:Film){
    this.films.push(f);
  }

  supprimerFilm(f:Film){
    const index=this.films.indexOf(f,0);
    if(index>-1){
      this.films.splice(index,1);
    }
  }
}
