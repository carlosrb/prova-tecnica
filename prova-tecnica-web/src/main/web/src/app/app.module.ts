import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { PosicaoComponent } from './posicao/posicao.component';
import { PontoComponent } from './ponto/ponto.component';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        AppComponent,
        PosicaoComponent,
        PontoComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AngularDateTimePickerModule,
        NgbModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
