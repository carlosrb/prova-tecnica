import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { PosicaoComponent } from './posicao/posicao.component';
import { PontoComponent } from './ponto/ponto.component';

@NgModule({
    declarations: [
        AppComponent,
        PosicaoComponent,
        PontoComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
