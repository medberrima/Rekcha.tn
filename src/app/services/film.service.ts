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
        genreFilm : "Docus sciences et nature" ,
        image : "https://www.gerardgeerlings.nl/wp-content/uploads/2020/11/the-social-dilemma.png"
      },
      {idFilm : 2,
        nomFilm : "joker",
        dateSortie : new Date("08/31/2019") ,
        genreFilm : "thriller psychologique" ,
        image : "https://fr.web.img6.acsta.net/pictures/19/09/03/12/02/4765874.jpg"
      },
      {idFilm : 3,
        nomFilm : "The founder",
        dateSortie : new Date("10/16/2016") ,
        genreFilm : "drame biographique" ,
        image : "https://fr.web.img3.acsta.net/pictures/16/11/18/17/49/128537.jpg"
      },
      {idFilm : 4,
        nomFilm : "Dachra",
        dateSortie : new Date("02/15/2019") ,
        genreFilm : "	Film d'horreur" ,
        image : "https://pictures.artify.tn/media/r9p6ux7liv6q4pxabgwi.jpg"
      },
      {idFilm : 5,
        nomFilm : "Les Misérables",
        dateSortie : new Date("10/05/2021") ,
        genreFilm : "	Film musical" ,
        image : "https://media.services.cinergy.ch/media/box1600/53f90747eb0590e2abeee29010075512d9da6148.jpg"
      },
      {idFilm : 6,
        nomFilm : "joker",
        dateSortie : new Date("08/31/2019") ,
        genreFilm : "thriller psychologique" ,
        image : "https://fr.web.img6.acsta.net/pictures/19/09/03/12/02/4765874.jpg"
      },
      {idFilm : 7,
        nomFilm : "The founder",
        dateSortie : new Date("10/16/2016") ,
        genreFilm : "drame biographique" ,
        image : "https://fr.web.img3.acsta.net/pictures/16/11/18/17/49/128537.jpg"
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
