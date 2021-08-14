import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

//Módulo personalizado
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

//Cambiar el local de la app de manera global.
import localES from '@angular/common/locales/es';
import localEn from '@angular/common/locales/en';
import { registerLocaleData } from '@angular/common';
registerLocaleData( localES );
registerLocaleData( localEn );


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRouterModule, 
    SharedModule,
    VentasModule,
    
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'es'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
