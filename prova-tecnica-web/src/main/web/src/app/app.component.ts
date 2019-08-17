import { Component, HostListener } from '@angular/core';
import { AppService } from './app.service';
import { PontoService } from './ponto/ponto.service';
import { PosicaoService } from './posicao/posicao.service';
import { Ponto } from './ponto/ponto';
import { Posicao } from './posicao/posicao';
import { getDistance } from 'geolib';
import { PontoPermanencia } from './permanencia/ponto-permanencia';;
import { Permanencia } from './permanencia/permanencia';
import * as moment from 'moment';

@Component({
    selector: 'app-root',
    providers: [AppService, PontoService, PosicaoService],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'prova-tecnica-app';

    startDate: Date = moment().add(-1, 'y').startOf('date').toDate();
    endDate: Date = moment().startOf('date').toDate();
    settings = {
        bigBanner: true,
        timePicker: false,
        format: 'dd/MM/yyyy',
        defaultOpen: false
    }

    pontos: Ponto[];

    posicoes: Posicao[];

    placas: string[] = ['Todas'];

    placa: string = 'Todas';

    pontoPermanencia: PontoPermanencia[];

    moment: any;

    constructor(
        private _posicaoService: PosicaoService,
        private _pontoService: PontoService
    ) {
    }

    ngOnInit() {
        this._pontoService.getAll()
            .subscribe(data => {
                this.pontos = data;
                this._posicaoService.getAll()
                    .subscribe(data => {
                        this.posicoes = data.map(entry =>
                            new Posicao(entry.placa, entry.dataPosicao,
                                entry.velocidade, entry.longitude, entry.latitude,
                                entry.ignicao, false));
                        this.posicoes.forEach(posicao => {
                            if (!this.placas.some(placa => placa === posicao.placa)) {
                                this.placas.push(posicao.placa);
                            }
                        });
                        this.calcTimes();
                    });
            });
    }

    calcTimes() {
        this.pontoPermanencia = new Array<PontoPermanencia>();
        this.pontos.forEach(ponto => {
            //console.log(ponto.nome);
            let entry = new PontoPermanencia;
            let placa: string;
            let noPonto: boolean;
            let permanencia: Permanencia;
            entry.ponto = ponto;
            entry.permanencias = new Array<Permanencia>();
            this.pontoPermanencia.push(entry);
            this.posicoes.filter(p => {
                console.log(this.placa);
                if (this.placa !== 'Todas') {
                    if (this.placa.localeCompare(p.placa) !== 0) {
                        return false;
                    }
                }
                return p.dataPosicao.toDate().getTime() >= this.startDate.getTime()
                    && p.dataPosicao.toDate().getTime() <= moment(this.endDate).add(1, 'd').toDate().getTime()
            }).sort((p1, p2) => p1.placa.localeCompare(p2.placa)).forEach(posicao => {
                let entrada = false;
                if (placa === undefined || placa.localeCompare(posicao.placa) != 0) {
                    placa = posicao.placa;
                    noPonto = false;
                }
                var distance = getDistance(
                    { latitude: ponto.latitude, longitude: ponto.longitude },
                    { latitude: posicao.latitude, longitude: posicao.longitude });
                if (distance <= ponto.raio) {
                    if (!noPonto) {
                        entrada = true;
                        noPonto = true;
                        permanencia = new Permanencia();
                        permanencia.ponto = ponto;
                        permanencia.placa = posicao.placa;
                        permanencia.posicoes = new Array<Posicao>();
                        entry.permanencias.push(permanencia);
                    }
                    posicao.entrada = entrada;
                    permanencia.posicoes.push(posicao);
                    //console.log("ponto [" + ponto.nome + "] placa [" +
                    //    posicao.placa + "] distance: " + distance);
                } else {
                    noPonto = false;
                }
            });
        });
    }

    @HostListener("change", ['$event.target'])
    onPlacaSelect() {
        this.calcTimes();
    }

    onDateSelect(event, date) {
        console.log(event);
        if (date === 'startDate') {
            this.startDate = event;
        } else {
            this.endDate = event;
        }
        this.calcTimes();
    }
}
