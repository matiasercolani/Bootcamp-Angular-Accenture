import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { AdminService } from '@modules/admin/services/admin.service';
import { TrackService } from '@modules/tracks/services/track.service';



@Component({
  selector: 'app-action-list',
  templateUrl: './action-list.component.html',
  styleUrls: ['./action-list.component.css']
})
export class ActionListComponent implements OnInit{
  //hijo 1
  allTracks:Array<any> = []
  deleteTrack: any;
  respuesta: any;  
  cualquier:any;
  constructor(private trackService: TrackService, private adminService: AdminService){ }

  ngOnInit(): void {
    this.loadDataAll();
    this.adminService.changeTrack.subscribe(
      changeEdit=>{
        console.log("CHANGE EDIT: ",changeEdit);
        this.allTracks.map(function(dato){
          if(dato.uid == changeEdit.uid){
            dato.name = changeEdit.name;
            dato.album = changeEdit.album;
            dato.cover = changeEdit.cover;
            dato.artist = changeEdit.artist;
            dato.uid = changeEdit.uid;
          }
          return dato;
        })
        console.log("CHANGE EDIT 2: ",this.allTracks);
      }
    )

    this.adminService.addTrackDinamic.subscribe(
      addTrack=>{
        this.allTracks.push(addTrack);
        // console.log("ADD: ",this.allTracks);
      }
    )
  }

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
    this.adminService.trackEdit.emit(track);//Se envia el evento al AdminService y de ahi al componente formEdit
  }

  async loadDataAll(): Promise<any> {
    this.allTracks = await this.trackService.getAllTracks$().toPromise();
  }
}
