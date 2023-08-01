import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';

@Component({
  selector: 'app-action-list',
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.css']
})
export class ActionListComponent implements OnInit{
  allTracks:Array<any> = []
  deleteTrack: any;
  respuesta: any;
  
  constructor(private trackService: TrackService){ }

  ngOnInit(): void {
    this.loadDataAll();
  }

  // async sendTrack(track:any){
  //   console.log(track.uid);
  //   this.deleteTrack = await this.trackService.deleteTracks$(track.uid).toPromise();
  //   console.log(this.deleteTrack);
  // }

  async sendTrackDelete(track:any){
    this.respuesta = false;
    console.log(track.uid);
    this.respuesta = await this.trackService.deleteTracks(track.uid);
    if(this.respuesta){
      console.log(this.allTracks);
      this.allTracks = this.allTracks.filter(function( obj ) {
        return obj.uid !== track.uid;
      });
      console.log(this.allTracks);
    }
  }

  async sendTrackEdit(track:any){
    console.log(track.uid);
    await this.trackService.deleteTracks(track.uid);
    // console.log(this.deleteTrack);
  }

  async loadDataAll(): Promise<any> {
    this.allTracks = await this.trackService.getAllTracks$().toPromise();
  }
}
