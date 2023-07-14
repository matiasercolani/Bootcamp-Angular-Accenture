import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css']
})
export class MediaPlayerComponent {
  mockCover: TrackModel = {
    cover:'https://www.lanacion.com.ar/resizer/ykH6qXqi7iWs3b9M_uBYqwKvu_0=/880x586/smart/filters:format(webp):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/AGUGPJKPNZEQHIF4TYLVFAJLFU.jpg',
    album:'Gioli y ashia',
    name:'BEBE (Oficial)',
    url: 'mp3',
    _id: 1
  }
}
