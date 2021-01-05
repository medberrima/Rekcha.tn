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
      {idFilm : 2,
        nomFilm : "joker",
        dateSortie : new Date("08/31/2019") ,
        genreFilm : "thriller psychologique" 
      },
      {idFilm : 3,
        nomFilm : "The founder",
        dateSortie : new Date("10/16/2016") ,
        genreFilm : "drame biographique" 
      },
      {idFilm : 4,
        nomFilm : "Dachra",
        dateSortie : new Date("02/15/2019") ,
        genreFilm : "	Film d'horreur" 
      },
      {idFilm : 5,
        nomFilm : "Les Misérables",
        dateSortie : new Date("10/05/2021") ,
        genreFilm : "	Film musical" 
      },
      {idFilm : 6,
        nomFilm : "Les Misérables",
        dateSortie : new Date("10/05/2021") ,
        genreFilm : "	Film musical" 
      },
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

  consulterFilm(id:number) : Film{
    return this.films.find( f => f.idFilm == id);
  }

  trierFilms(){
    this.films = this.films.sort((n1,n2) => {
      if (n1.idFilm > n2.idFilm) {return 1;}
      if (n1.idFilm < n2.idFilm) {return -1;}
      return 0;
    });
  }

  updateFilm(f:Film){
    // console.log(p);
    this.supprimerFilm(f);
    this.ajoutFilm(f);
    this.trierFilms();
  }
}
