import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {ParticlesModule} from 'angular-particle';
import {HomeComponent} from './home/home.component';
import {RoutingModule} from './utils/routing.module';
import {HomeResolver} from './home/home.resolver';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule} from '@angular/material';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ParticlesModule,
    RoutingModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    FlexLayoutModule
  ],
  providers: [HomeResolver],
  bootstrap: [AppComponent]
})
export class AppModule {
}
