import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ReadComponent } from './read/read.component';
import { CreateComponent } from './create/create.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/tutorial.reducer';

@NgModule({
declarations: [
AppComponent,
ReadComponent,
CreateComponent
],
imports: [
BrowserModule,
AppRoutingModule,
BrowserModule,
StoreModule.forRoot({
tutorial: reducer
}),
StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }

