import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpParams} from '@angular/common/http';
import {Meta} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  host = 'https://celebrate.troffo.com';

  name = 'Your Name';
  newName = '';
  isCreated = false;
  otherAvailable = false;

  constructor(private route: ActivatedRoute, private meta: Meta) {
  }

  ngOnInit() {
    this.meta.addTag({property: 'og:url', content: this.host});
    this.meta.addTag({property: 'og:type', content: 'website'});
    this.meta.addTag({property: 'og:title', content: 'Happy Navratri! - Create Special Wishes!'});
    this.meta.addTag({property: 'og:description', content: 'Share customized greetings to your friends and family'});
    this.meta.addTag({property: 'og:image', content: this.host + '/assets/navratri.png'});
    this.meta.addTag({name: 'title', content: 'Happy Navratri! - Create Special Wishes!'});
    this.meta.addTag({name: 'description', content: 'Share customized greetings to your friends and family'});
    this.meta.addTag({
      name: 'keywords',
      content: 'Troffo Media, celebrate, share, wishes, joy, navratri'
    });

    if (navigator.share) {
      this.otherAvailable = true;
    }
    this.name = this.route.snapshot.data.name;
    if (name === 'null') {
      this.name = 'Troffo';
    }
    console.log(this.name);
  }

  getUrl(): string {
    const params = new HttpParams()
      .set('from', this.newName);
    return 'https://celebrate.troffo.com?' + params.toString();
  }

  facebookShare() {
    const url = 'http://www.facebook.com/sharer/sharer.php?u=' + this.getUrl();
    window.open(url);
  }

  whatsAppShare() {
    let url = 'whatsapp://send?text=';
    url += 'Happy Navratri! ' + this.name + ' sent you special wishes. ' + this.getUrl();
    window.open(url);
  }

  otherShare() {
    if (navigator.share) {
      navigator.share({
        title: 'Happy Navratri!',
        text: this.name + ' sent you special wishes',
        url: this.getUrl(),
      })
        .then(() => console.log('Successful share'))
        .catch((error) => console.log('Error sharing', error));
    } else {
      console.log('asdasdasd');
    }
  }

  createYour() {
    if (this.newName.length > 1) {
      this.name = this.newName;
      this.isCreated = true;
    }
  }
}
