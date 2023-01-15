import { Injectable } from "@angular/core";
import { album } from "src/app/domain/model/album";
import { AlbumRepository } from "src/app/domain/model/album.repository";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class AlbumUseCase{

    URL = 'https://jsonplaceholder.typicode.com/albums/';

    constructor(private albumRepository: AlbumRepository){}

    albums: album[] = [];

    getAlbums(): Observable<album[]> {
        return this.albumRepository.getAlbums();
    }

    getAlbum(id: number): Observable<album> {
        return this.albumRepository.getAlbum(id);
    }

    createAlbum(album: album): Observable<any> {
        return this.albumRepository.createAlbum(album);
    }

    updateAlbum(album: album): Observable<any> {
        return this.albumRepository.updateAlbum(album);
    }

    deleteAlbum(id: number): Observable<any> {
        return this.albumRepository.deleteAlbum(id);
    }
}