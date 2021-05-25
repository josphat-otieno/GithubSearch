import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { SearchFormComponent } from './search-form/search-form.component';

const routes: Routes = [
  {path: "", component: MyProfileComponent},
  {path: 'my-profile', component:MyProfileComponent},
  {path: 'search', component:SearchFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
