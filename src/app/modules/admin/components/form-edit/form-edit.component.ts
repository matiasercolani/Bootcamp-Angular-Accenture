import { Component,OnInit,Input } from '@angular/core';
import{FormControl,FormGroup,Validators,ReactiveFormsModule} from '@angular/forms';
import { AdminService } from '@modules/admin/services/admin.service';
import { TrackService } from '@modules/tracks/services/track.service';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit{
  formTrack: FormGroup = new FormGroup({});
  trackEditForm:any;
  formOrig:any;
  

  constructor(private trackService: TrackService, private adminService: AdminService){}

  ngOnInit(): void {
    this.adminService.trackEdit.subscribe(//Recibe el track de action-page mediante el servicio
      trackEdit => {
        this.trackEditForm = trackEdit;
        console.log(this.trackEditForm);
        this.selectTrack(this.trackEditForm);
      }
    )
    this.formTrack = new FormGroup(
      {
        cancion: new FormControl(''),
        album: new FormControl(''),
        cover: new FormControl(''),
        artista: new FormControl(''),
        id: new FormControl('')
      }
    )
  }

  selectTrack(track:any):void{
    this.formTrack = new FormGroup(
      {
        cancion: new FormControl(track.name),
        album: new FormControl(track.album),
        cover: new FormControl(track.cover),
        artista: new FormControl(track.artist),
        id: new FormControl(track.uid)
      }
    )
  }

  
  sendTrack():void{
    const {cancion, album, cover, artista, id}= this.formTrack.value // Toma los datos del form
    console.log('cancion: ',cancion,' album: ',album,'cover: ',cover,' artista: ',artista,' id: ',id)
    this.formOrig = {
      name : cancion,
      album: album,
      cover: cover,
      artist: artista,
      uid: id
    }

    this.trackService.editTracks(id,this.formOrig);
    this.adminService.changeTrack.emit(this.formOrig);
  }
}
