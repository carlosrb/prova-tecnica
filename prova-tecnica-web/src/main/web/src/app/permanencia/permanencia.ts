import { Ponto } from '../ponto/ponto';
import { Posicao } from '../posicao/posicao';
import { Moment, Duration } from 'moment';
import * as moment from 'moment';

export class Permanencia {

    ponto: Ponto;
    placa: string;
    posicoes: Posicao[];

    getChegada(): Moment {
        return this.posicoes[0].dataPosicao;
    }

    getSaida(): Moment {
        return this.posicoes[this.posicoes.length - 1].dataPosicao;
    }

    getTempo(): Duration {
        return moment.duration(this.getSaida().diff(this.getChegada()))
    }
}
