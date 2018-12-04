import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
/**components imported */
import { TriviaComponent } from './trivia/trivia.component';
import { routes } from './app-routing/routes';
import { HomeComponent } from './home/home.component';
import { NameComponent } from './name/name.component';
import { WordscrambleComponent } from './wordscramble/wordscramble.component';

@NgModule({
  declarations: [
    AppComponent,
    TriviaComponent,
    HomeComponent,
    NameComponent,
    WordscrambleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
