import { Moment } from 'moment';
import * as moment from 'moment';

export class Posicao {

    constructor(placa: string, dataPosicao: string, velocidade:number, 
        longitude:number, latitude: number, ignicao: boolean, entrada: boolean) {

            this.placa = placa;
            this.dataPosicao = moment(dataPosicao); 
            this.velocidade = velocidade;
            this.longitude = longitude;
            this.latitude = latitude;
            this.ignicao = ignicao;
            this.entrada = entrada;
    }

    placa: string;
    dataPosicao: Moment;
    velocidade: number;
    longitude: number;
    latitude: number;
    ignicao: boolean;
    entrada : boolean;
}
