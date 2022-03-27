import { Component } from '@angular/core';
import { IOMBDResponse } from './ombdresponse';
import { OmbdApiService } from './services/ombd-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [OmbdApiService]
})
export class AppComponent {
  title = 'openstackFront';

  movieData: IOMBDResponse | undefined;
  errorMessage: any;

  constructor(private _ombdService: OmbdApiService) {

  }

  getMovieDetails(movieName:string) : boolean {
    this._ombdService.getMovieData(movieName).subscribe(
      movieData => {
        this.movieData=movieData;
        console.log('Director name: ' + this.movieData.Director);
      },
      error => this.errorMessage = <any>error
    );
    return false;
  }
}
