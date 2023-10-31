import { Component, OnInit } from '@angular/core';
import { SerieService } from './serie.service';
import { Serie } from './serie';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: []
})
export class SerieComponent implements OnInit {

  series: Array<Serie> = [];
  avgTmp = 0;

  constructor(private serieService: SerieService) { }

  getSeries() {
    let cant: number = 0;
    this.serieService.getSeries().subscribe(series => {
      series.forEach(serie => {
        this.avgTmp += serie.temporadas;
        cant++;
    })
    this.avgTmp = this.avgTmp/cant
    this.series = series;
  });
  }

  ngOnInit() {
    this.getSeries()
  }
}
