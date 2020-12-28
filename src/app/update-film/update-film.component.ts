import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Film } from '../model/Film.model';
import { FilmService } from '../services/film.service';

@Component({
  selector: 'app-update-film',
  templateUrl: './update-film.component.html',
  styles: [
  ]
})
export class UpdateFilmComponent implements OnInit {
  currentFilm = new Film() ;
  message: string;
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              private filmService: FilmService) { }

  ngOnInit(): void {
    this.currentFilm =this.filmService.consulterFilm(this.activatedRoute.snapshot.params.id);
    console.log(this.currentFilm);
  }
  updateFilm(){ 
    console.log(this.currentFilm);
    this.filmService.updateFilm(this.currentFilm);
    this.router.navigate(['films']);
  }
}
