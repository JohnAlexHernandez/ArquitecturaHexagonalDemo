import { Component, OnInit } from "@angular/core";
import { album } from "src/app/domain/model/album";
import { AlbumUseCase } from "src/app/aplication/useCase/album.usecase";

@Component({
    selector: 'app-album',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.css']
  })
export class albumComponent implements OnInit{
    constructor(public albumUseCase: AlbumUseCase){}

    objAlbum: album = {
        userId: 0,
        id: 0,
        title: 'Album test'
    }; 

    albums: album[] = [];

    ngOnInit(): void {
        this.getAlbums();
    }

    getAlbums(){
        this.albumUseCase.getAlbums().subscribe({
            next: (res) => {
                console.log(res);
                this.albums = res;
            },
            error: (err) => console.error(err)
        })
    }
    
    getAlbum(id: number){
        this.albumUseCase.getAlbum(id).subscribe({
            next: (res) => {
                console.log(res);
                this.objAlbum = res;
            },
            error: (err) => console.error(err)
        })
    }

    createAlbum(album: album){
        this.albumUseCase.createAlbum(album).subscribe({
            next: (res) => {
                console.log(res);
            },
            error: (err) => console.error(err)
        })
    }

    updateAlbum(album: album){
        this.albumUseCase.updateAlbum(album).subscribe({
            next: (res) => {
                console.log(res);
            },
            error: (err) => console.error(err)
        })
    }

    deleteAlbum(id: number){
        this.albumUseCase.deleteAlbum(id).subscribe({
            next: (res) => {
                console.log(res);
            },
            error: (err) => console.error(err)
        })
    }
}
