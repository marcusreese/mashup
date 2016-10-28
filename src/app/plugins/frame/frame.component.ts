import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer /*, SafeResourceUrl, SafeUrl */} from '@angular/platform-browser';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.scss']
})
export class FrameComponent implements OnInit {
  @Input()
  plugin: any;

  url: any;

  constructor(private s: DomSanitizer) { }

  ngOnInit() {
    this.url = this.s.bypassSecurityTrustResourceUrl(this.plugin.url);
  }

}
