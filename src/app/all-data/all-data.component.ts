import { Component, OnInit } from '@angular/core';
import { VideoService } from '../video.service';
import { Video } from '../video';

@Component({
  selector: 'app-all-data',
  templateUrl: './all-data.component.html',
  styleUrls: ['./all-data.component.css']
})
export class AllDataComponent implements OnInit {

  videos:any;

  constructor(private videoService:VideoService) {
    this.videos=false;
   }

  ngOnInit() {
    this.getAllVideos();
  }

  getAllVideos(){
    this.videoService.getAllVideos().subscribe(data=>{
      this.videos=data
    });
  }
}
