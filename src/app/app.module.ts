import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapaEditarComponent } from './components/mapa/mapa-editar.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [AppComponent, MapaComponent, MapaEditarComponent],
  entryComponents: [MapaEditarComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: environment.key,
    }),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
