import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router'
import { TabsPage } from './tabs.page'

const routes: Routes = [
	{
		path:'',
		component: TabsPage,
		children: [
			{ path: '', redirectTo: 'maintenance'},
			{ path: 'profile', loadChildren: '../profile/profile.module#ProfilePageModule' },
			{ path: 'maintenance', loadChildren: '../maintenance/maintenance.module#MaintenancePageModule' },
			{ path: 'track', loadChildren: '../track/track.module#TrackPageModule' }
		]
	}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsRoutingModule { }