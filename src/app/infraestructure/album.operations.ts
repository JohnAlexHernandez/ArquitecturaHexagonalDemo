import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { album } from "src/app/domain/model/album";
import { AlbumRepository } from "src/app/domain/model/album.repository";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
export class AlbumOperations extends AlbumRepository{

    URL = 'https://jsonplaceholder.typicode.com/albums/';

    constructor(private http: HttpClient){
        super();
    }

    getAlbums(): Observable<album[]> {
        return this.http.get<Array<album>>(this.URL);
    }

    getAlbum(id: number): Observable<album> {
        return this.http.get<album>(`${this.URL}${id}`);
    }

    createAlbum(album: album): Observable<any> {
        return this.http.post(this.URL, album);
    }

    updateAlbum(album: album): Observable<any> {
        return this.http.put(`${this.URL}${album.id}`, album);
    }

    deleteAlbum(id: number): Observable<any> {
        return this.http.delete(`${this.URL}${id}`);
    }
}