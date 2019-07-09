import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import {VideoService} from './video.service';
import{HttpClientModule} from '@angular/common/http';
import{FormsModule} from '@angular/forms';
import { VideojsComponent } from './videojs/videojs.component';
import { AllDataComponent } from './all-data/all-data.component';
// import { DetailsComponent } from './details/details.component';
// import { PlayComponent } from './play/play.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojsComponent,
    AllDataComponent
    // ,
    // DetailsComponent,
    // PlayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [VideoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
