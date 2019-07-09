import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { VideoService } from '../video.service';
import { Video } from '../video';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})

export class PlayComponent implements OnInit {

  myurl: any;
  video:any;
  url:any;
  id;
  video1:Video;
  constructor(private service:VideoService,private sanitizer:DomSanitizer) { }

  ngOnInit() {
    this.myurl="rtmp://localhost:1935/vod/mp4:Tom.mp4";
    this.myurl=this.sanitizer.bypassSecurityTrustResourceUrl(this.myurl);
      
    this.id=sessionStorage.getItem('id');
    this.play(this.id);
    // this.service.playVideo(this.id).subscribe(data => {
    //   console.log(data, "dasd")
    //   this.url=this.sanitizer.bypassSecurityTrustResourceUrl(data)
    //   console.log(this.url);
    // });
    console.log(this.url);
  }

  play(value){
    this.service.play(value).subscribe((data:any) => {
      console.log(data.videoUrl)
      //this.url=data.videoUrl
      this.video= data;
      this.video1=this.video;
      this.video.videoUrl=this.sanitizer.bypassSecurityTrustResourceUrl(data.videoUrl);
      
      this.url=this.video.videoUrl;
      
      // console.log(this.video);
      // console.log(this.video1);


      console.log("--------- video details ------------");

      console.log(this.video.id);
      console.log(this.video.title);
      console.log(this.video.description);
      console.log(this.video.poster);
      console.log(this.video.videoUrl);

      
      console.log("--------- video1 details ------------");
      console.log(this.video1.id);
      console.log(this.video1.title);
      console.log(this.video1.description);
      console.log(this.video1.poster);
      console.log(this.video1.videoUrl);

      console.log("--------- details end ------------");
      console.log("url: " + this.url);

    });
  }
}
