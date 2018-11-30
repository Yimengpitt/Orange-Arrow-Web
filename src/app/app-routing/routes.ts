import {Routes} from '@angular/router';
import { TriviaComponent } from '../trivia/trivia.component';
import {HomeComponent} from '../home/home.component';

export const routes: Routes = [
    {path:'trivia',component: TriviaComponent},
    {path:'home',component: HomeComponent},
    {path:'' ,redirectTo: '/home',pathMatch:'full'}
];