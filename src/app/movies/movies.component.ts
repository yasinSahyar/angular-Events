import { Component } from "@angular/core";
import { Movie } from "../movie";
import { MovieService } from "../movie.service";


@Component({
    selector: 'movies',
    templateUrl: 'movies.component.html'
})

export class MoviesComponent {
    title = 'Movie List';
    movies: Movie[] = [];
    selectedMovie: Movie | null = null;

    constructor(private movieService: MovieService) { }

    ngOnInit(): void {
        this.getMovies();
        //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        //Add 'implements OnInit' to the class. constructor dan sonra calisir anlaminda

    }


    onSelect(movie: Movie): void {
        this.selectedMovie = movie;

    }

    getMovies(): void {
        this.movieService.getMovies()
            .subscribe(movies => {
                this.movies = movies;
            });
    }


}