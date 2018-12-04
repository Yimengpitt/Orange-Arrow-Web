import {Routes} from '@angular/router';
import { TriviaComponent } from '../trivia/trivia.component';
import {HomeComponent} from '../home/home.component';
import { NameComponent } from '../name/name.component';
import { WordscrambleComponent } from '../wordscramble/wordscramble.component';
export const routes: Routes = [
    {path:'trivia',component: TriviaComponent},
    {path:'home',component: HomeComponent},
    {path:'name',component:NameComponent},
    {path:'wordscramble',component:WordscrambleComponent},
    {path:'' ,redirectTo: '/home',pathMatch:'full'}
];