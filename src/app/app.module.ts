import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HeaderComponent } from './header/header.component';
import { QuemComponent } from './quem/quem.component';
import { PecasComponent } from './pecas/pecas.component';
import { ContatoComponent } from './contato/contato.component';
import { BtnComponent } from './btn/btn.component';


@NgModule({
  declarations: [
    AppComponent,
    RodapeComponent,
    HeaderComponent,
    QuemComponent,
    PecasComponent,
    ContatoComponent,
    BtnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
