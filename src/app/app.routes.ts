import { Routes } from '@angular/router';
import { LayoutPrincipalComponent } from './components/layout/layout-principal/layout-principal.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';

export const routes: Routes = [
    
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: '',
        component: LayoutPrincipalComponent,
        children: [
            { path: 'home', component: HomePageComponent },  
               
        ]
    }
];
