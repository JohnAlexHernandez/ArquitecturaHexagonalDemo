import { Observable } from "rxjs";
import { album } from "./album";

export abstract class AlbumRepository{
    abstract getAlbums(): Observable<album[]>
    abstract getAlbum(id: number): Observable<album>
    abstract createAlbum(album: album): Observable<any>
    abstract updateAlbum(album: album): Observable<album>
    abstract deleteAlbum(id: number): Observable<album>
}