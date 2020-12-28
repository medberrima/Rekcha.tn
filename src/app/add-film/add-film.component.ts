import { Component, OnInit } from '@angular/core';
import{ Film } from '../model/Film.model';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-add-films',
  templateUrl:'./add-film.component.html',
  styleUrls: ['./add-film.component.css']
})

export class AddFilmComponent implements OnInit {
  newFilm= new Film()
  message: string;

  constructor(private filmService : FilmService) { }

  ngOnInit(): void {

  }

  addFilm(){
    // console.log(this.newFilm);
    this.filmService.ajoutFilm(this.newFilm)
    this.message="FILM "+this.newFilm.nomFilm + " ajoutee avec succes !"

  }
}
