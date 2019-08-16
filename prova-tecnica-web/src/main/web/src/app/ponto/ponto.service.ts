import { Injectable } from '@angular/core';
import { AppService } from '../app.service';

@Injectable({
    providedIn: 'root'
})
export class PontoService {

    constructor(private _service: AppService) { }

    public getAll() {
        return this._service.getResource('/api/ponto');
    }
}
