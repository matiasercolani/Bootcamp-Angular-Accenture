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

  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('')
  listObservers$: Array<Subscription> = []
  state:string = 'paused';

  constructor(public multimediaService: MultimediaService) { }

  ngOnInit(): void {

    const observer1$ = this.multimediaService.playerStatus$
      .subscribe(status=> this.state = status)
    this.listObservers$ = [observer1$]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
    console.log('BOOOM!')
  }


  handlePosition(event: MouseEvent): void {
    const elNative: HTMLElement = this.progressBar.nativeElement
    const { clientX } = event
    const { x, width } = elNative.getBoundingClientRect()
    const clickX = clientX - x //TODO: 1050 - x
    const percentageFromX = (clickX * 100) / width
    console.log(`Click(x): ${percentageFromX}`);
    this.multimediaService.seekAudio(percentageFromX)

  }

  mockCover: TrackModel = {
    cover:'https://www.lanacion.com.ar/resizer/ykH6qXqi7iWs3b9M_uBYqwKvu_0=/880x586/smart/filters:format(webp):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/AGUGPJKPNZEQHIF4TYLVFAJLFU.jpg',
    album:'Gioli y ashia',
    name:'BEBE (Oficial)',
    url: 'mp3',
    _id: 1
  }
}
