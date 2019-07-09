import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Video } from './video';

@Injectable({
  providedIn: 'root'
})

export class VideoService {

  url:any;
  video:Video;

  httpOptions={
    headers:new HttpHeaders({
      'Access-Control-Allow-Origin' : '*'
    }),
    responseType: 'text'
  }

  constructor(private http:HttpClient) { }

  playVideo(id){
    this.url= this.http.get('http://localhost:8080/vod/play/'+id,{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin' : '*'
      }),
      responseType: 'text'
    });
    return this.url;
  }

  playVideo2(id){
    return this.http.get('http://localhost:8080/vod/video/'+id,{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin' : '*'
      })
    });
  }

  getAllVideos(){
    return this.http.get('http://localhost:8080/vod/videos',{
      headers:new HttpHeaders({
        'Access-Control-Allow-Origin' : '*'
      })
    });
  }
}
