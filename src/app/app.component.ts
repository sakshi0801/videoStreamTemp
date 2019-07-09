import { Component } from '@angular/core';
import { VideoService } from './video.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Video } from './video';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'streamVideo';

  video:any;

  public url:any;

  public poster:any;

  constructor(private videoService:VideoService,private sanitizer: DomSanitizer){}

  ngOnInit(){
    this.playVideo2(2); 
  }

  playVideo1(id){
    this.videoService.playVideo(id).subscribe(data=>{
      // sessionStorage.setItem("url",data);
      this.serviceCallback1(data);
    })
  }

  serviceCallback1(data) {
      // sessionStorage.setItem("url",data);
      console.log("data=" +data);
      this.url=this.sanitizer.bypassSecurityTrustResourceUrl(data);
  }

  serviceCallback2(data) {
    // sessionStorage.setItem("url",data);
      this.video= data;
      console.log("--------- video details ------------");
      console.log(this.video.videoUrl);
      this.url=this.sanitizer.bypassSecurityTrustResourceUrl(this.video.videoUrl);
      this.poster="/assets/"+this.video.poster;
}

  playVideo2(id){
    this.videoService.playVideo2(id).subscribe((data:any) => {
      this.serviceCallback2(data);
    });
  }

}
