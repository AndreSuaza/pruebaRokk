import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AnalyticsComponent } from './components/analytics/analytics.component';

//graficos
import { ChartsModule } from 'ng2-charts';

//services
import {ActivityService} from './services/activity.service';

//Routes
import {app_routing} from './app.routes';
import { LineaComponent } from './components/linea/linea.component';
import { ColumnaComponent } from './components/columna/columna.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AnalyticsComponent,
    LineaComponent,
    ColumnaComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ChartsModule,
    app_routing
  ],
  providers: [
    ActivityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
