import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from './components/index.paginas';


const app_routes: Routes = [
  { path: '', component: AnalyticsComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(app_routes);
