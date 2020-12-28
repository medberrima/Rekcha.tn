import { Component, OnInit } from '@angular/core';
import{ Film } from '../model/Film.model';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})

export class FilmsComponent implements OnInit {
  films : Film[];
  constructor(private filmService : FilmService) { 
    this.films = filmService.listeFilms();
  }
  ngOnInit(): void {
  } 

  supprimerFilm(f:Film){
    let conf = confirm("Etes-vous sûr ?");
    console.log(conf);
    if (conf) {
      this.filmService.supprimerFilm(f);
    }
  }
}
