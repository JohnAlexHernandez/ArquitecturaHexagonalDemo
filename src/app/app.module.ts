import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { albumComponent } from './components/album/album.component';
import { AlbumOperations } from './infraestructure/album.operations';
import { AlbumRepository } from './domain/model/album.repository';

@NgModule({
  declarations: [
    albumComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{provide: AlbumRepository,  useClass: AlbumOperations}],
  bootstrap: [albumComponent]
})
export class AppModule { }
