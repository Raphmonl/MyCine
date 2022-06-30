import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOrEditFilmComponent } from './add-or-edit-film/add-or-edit-film.component';

const routes: Routes = [
{
  path: 'add-or-edit',
  component: AddOrEditFilmComponent,
},
/*{
  path: 'second',
  component: SecondComponent
},*/
{
  path: "",
  redirectTo: '/add-or-edit',
  pathMatch: 'full'
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
