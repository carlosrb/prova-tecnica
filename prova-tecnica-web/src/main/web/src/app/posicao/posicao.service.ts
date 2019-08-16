import { Injectable } from '@angular/core';
import { AppService } from '../app.service';

@Injectable({
    providedIn: 'root'
})
export class PosicaoService {

    constructor(private _service: AppService) { }

    public getAll() {
        return this._service.getResource('/api/posicao');
    }
}
