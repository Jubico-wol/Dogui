import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { QuestionsComponent } from './questions/questions.component'

const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'encuesta', component:QuestionsComponent},

  { path:'', redirectTo:'/', pathMatch: 'full'},
  { path: '**', redirectTo:  '/' }
];

const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled'
};

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
