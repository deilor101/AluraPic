import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    photos = [
      {
        url: 'https://play-lh.googleusercontent.com/c4SxEDCnHLh78ihzLqM3XwdCvrwJKQdhd5opSCMerITWeom5cO0yP3AKolYpqxPzIlo',
        description: 'marvel'
      },
      {
        url: 'https://t2.tudocdn.net/579487?w=1920',
        description: 'marvel'
      },
      {
        url: 'https://image.api.playstation.com/vulcan/ap/rnd/202111/1815/NqFuRvlqSAXJcUc3NIfOtOZx.png',
        description: 'marvel'
      }
    ];
}

