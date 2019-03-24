import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: '', redirectTo: 'login', pathMatch: 'full' },
	{ path: 'login', loadChildren: './login/login.module#LoginPageModule' },
	{ path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  	{ path: 'register', loadChildren: './register/register.module#RegisterPageModule' },
	// { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
	// { path: 'maintenance', loadChildren: './maintenance/maintenance.module#MaintenancePageModule' },
	// { path: 'track', loadChildren: './track/track.module#TrackPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
