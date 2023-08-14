import { HttpClient } from '@angular/common/http';
import { TrackModel } from '@core/models/tracks.model';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, mergeMap, tap, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class TrackService {
  private readonly URL = environment.api;

  constructor(private http:HttpClient) { 

  }

  /**
   * 
   * @returns Devolver todas las mejores canciones!
   */

  getAllTracks$():Observable<any>{
    return this.http.get(`${this.URL}/api/1.0/tracks`) //ER94
    .pipe(
      map(({data}:any)=>{
        return data
      })
    )
  }

    /**
   * 
   * @returns Borrar cancion seleccionada!
   */

    deleteTracks(track:any):Promise<any>{
      return this.http.delete(`${this.URL}/api/1.0/tracks/delete/${track}`).toPromise()
      .then((resp) =>{
        console.log(resp);
        return true;
      })
      .catch((err) =>{
        console.log(err);
        return false;
      });
     }

    /**
   * 
   * @returns Editar cancion seleccionada!
   */
    editTracks(track:any, body:any){
      this.http.put(`${this.URL}/api/1.0/tracks/edit/${track}`, body).subscribe(data=>{
        console.log(data);
      }, error => {
        console.log(error);}) //ER94
    }

    addTrack(track:any, body:any){
      this.http.post(`${this.URL}/api/1.0/tracks/add`, body).subscribe(data=>{
        console.log(data);
      }, error => {
        console.log(error);}) //ER94
    }

  /**
   * 
   * @returns Devolver canciones random
   */

  private skipById(listTracks: TrackModel[], id: number): Promise<TrackModel[]> {
    return new Promise((resolve, reject) => {
      const listTmp = listTracks.filter(a => a._id !== id)
      resolve(listTmp)
    })
  }

  getAllRandom$(): Observable<any> {
    return this.http.get(`${this.URL}/api/1.0/tracks`)//ER94
      .pipe(
        mergeMap(({ data }: any) => this.skipById(data, 2)),
        // map((dataRevertida) => { //TODO aplicar un filter comun de array
        //   return dataRevertida.filter((track: TrackModel) => track._id !== 1)
        // })
        catchError((err) => {
          const { status, statusText } = err;
          return of([])
        })
      )
  }

}
