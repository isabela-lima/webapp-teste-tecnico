import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './views/signup/signup.component';
import { HomeComponent } from './views/home/home.component';
import { ProfileEditComponent } from './views/profile-edit/profile-edit.component';
import { ProfileViewComponent } from './views/profile-view/profile-view.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'app-signup', component: SignupComponent },
  { path: 'views/profile-edit/:id', component: ProfileEditComponent },
  { path: 'views/profile-view/:id', component: ProfileViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
