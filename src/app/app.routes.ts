import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
   },
  {
    path: 'weather',
    loadComponent: () => import('./weather/weather.page').then( m => m.WeatherPage)
  },
  
  {
    path: 'settings',
    loadComponent: () => import('./settings/settings.page').then( m => m.SettingsPage)
  },
  
    { path: 'news', loadComponent: () => import('./news/news.page').then(m => m.NewsPage) },  
  {
    path: 'all-countriesfixed',
    loadComponent: () => import('./all-countriesfixed/all-countriesfixed.page').then( m => m.allCountriesfixedPage)
  },
 

];
export class AppRoutingModule {}
