import { Component } from '@angular/core';
import { AppService } from './app.service';
import { PontoService } from './ponto/ponto.service';
import { PosicaoService } from './posicao/posicao.service';
import { Ponto } from './ponto/ponto';
import { Posicao } from './posicao/posicao';
import { getDistance } from 'geolib';
import { GeolibDistanceFn } from 'geolib/es/types';

@Component({
    selector: 'app-root',
    providers: [AppService, PontoService, PosicaoService],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'prova-tecnica-app';

    pontos: Ponto[];

    posicoes: Posicao[];

    constructor(
        private _posicaoService: PosicaoService,
        private _pontoService: PontoService
    ) { }

    ngOnInit() {
        this._pontoService.getAll()
            .subscribe(data => {
                this.pontos = data;
                this._posicaoService.getAll()
                    .subscribe(data => {
                        this.posicoes = data;
                        this.calcTimes();
                    });
            });

    }

    calcTimes() {
        this.pontos.forEach(ponto => {
            console.log(ponto.nome);
            this.posicoes.forEach(posicao => {
                var distance = getDistance(
                    { latitude: ponto.latitude, longitude: ponto.longitude },
                    { latitude: posicao.latitude, longitude: posicao.longitude });
                console.log("ponto [" + ponto.nome + "] placa [" + posicao.placa + "] distance: " + distance);
            });
        });
    }
}
