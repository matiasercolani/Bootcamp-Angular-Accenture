import { Component, OnDestroy, OnInit, ViewChild, ElementRef } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs'; //TODO: Programacion reactiva!

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent implements OnInit, OnDestroy {

  listObservers$: Array<Subscription> = []

  constructor(public multimediaService: MultimediaService) { }

  ngOnInit(): void {
    const observer1$: Subscription = this.multimediaService.callback.subscribe(
      (response: TrackModel)=> {
        console.log('Recibiendo cancion...', response);
      }
    )
    this.listObservers$ = [observer1$]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
    console.log('BOOOM!')
  }

  mockCover: TrackModel = {
    cover:'https://www.lanacion.com.ar/resizer/ykH6qXqi7iWs3b9M_uBYqwKvu_0=/880x586/smart/filters:format(webp):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/AGUGPJKPNZEQHIF4TYLVFAJLFU.jpg',
    album:'Gioli y ashia',
    name:'BEBE (Oficial)',
    url: 'mp3',
    _id: 1
  }
}
