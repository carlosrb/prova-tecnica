import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

    constructor(private _http: HttpClient) { }

    getResource(resourceUrl: string): Observable<any> {
        var headers = new HttpHeaders({});
        return this._http.get("http://localhost:8080" + resourceUrl, {})
            .catch((error: any) => {
                return Observable.throw('Server error');
            });
    }

}