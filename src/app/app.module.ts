import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Correct path
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, // Declare the AppComponent
  ],
  imports: [ BrowserModule,       // Essential for Angular apps
IonicModule.forRoot(), // Initializes the Ionic framework
AppRoutingModule,    // Handles app routing
    HttpClientModule,    // Enables HTTP requests
  ],
  providers: [{ provide: RouteReuseStrategy,useClass: IonicRouteStrategy, // Optimized route strategy for Ionic
    },
  ],
  bootstrap: [AppComponent], // Entry point for the application
})
export class AppModule {}