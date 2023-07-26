import { Component,OnInit, OnDestroy } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.css']
})
export class FavoritePageComponent implements OnInit {
  //ER94
  allTracks:Array<TrackModel> = [];
  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
    this.loadAllTracks();
  }
  
  async loadAllTracks(): Promise<any> {
    this.allTracks = await this.trackService.getAllTracks$().toPromise();
    console.log(this.allTracks);
  }



}
