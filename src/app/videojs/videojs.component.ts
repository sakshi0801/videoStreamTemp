import { Component, OnInit, ElementRef, Input } from '@angular/core';

// declare function videojs1(value:any):any;

@Component({
  selector: 'app-videojs',
  templateUrl: './videojs.component.html',
  styleUrls: ['./videojs.component.css']
})
export class VideojsComponent implements OnInit {

  @Input() url:any;

  @Input() obj:any;

  @Input() poster:any;

  private player: any;

  constructor() {
    this.url=false;
    this.player=false;
    this.obj=false;
   }

  ngOnInit() {
  }

  ngAfterViewInit(){
    // alert('xyz');
    // alert("abc");
    // this.player=videojs1(document.getElementById("video"));
  }
}
