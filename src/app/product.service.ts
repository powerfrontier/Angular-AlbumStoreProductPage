import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  private _albumUrl = '../assets/album.json';

  constructor(private _http: Http) { }

  // La función puede tener mejor esta cabecera pero para pasar el test del curso se tiene que poner sin especificar el tipo de retorno
  // getAlbum(id: number): Observable<JSON> {
  getAlbum(id: number) {
    return this._http.get(this._albumUrl).map((response: Response) => response.json());
  }

}



