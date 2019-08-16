import { Component } from '@angular/core';
import { AppService } from './app.service';
import { PontoService } from './ponto/ponto.service';
import { PosicaoService } from './posicao/posicao.service';

@Component({
    selector: 'app-root',
    providers: [AppService, PontoService, PosicaoService],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'prova-tecnica-app';

    pontos: [];

    posicoes: [];

    constructor(
        private _posicaoService: PosicaoService,
        private _pontoService: PontoService
    ) { }

    ngOnInit() {
        this._pontoService.getAll()
            .subscribe(data => {
                this.pontos = data;
            });
        this._posicaoService.getAll()
            .subscribe(data => {
                this.posicoes = data;
            });
    }
}
