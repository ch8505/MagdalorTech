import { Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login';
import { RegisterComponent } from './components/auth/register/register';
import { GiftGallery } from './components/manager/gift-gallery/gift-gallery';
import { Home } from './pages/home/home';
import { GiftCatalog } from './components/gift/gift-catalog/gift-catalog';
import { ManagementDonor } from './components/manager/management-donor/management-donor';
import { Checkout } from './components/cart/checkout/checkout';
import { ManagerUsers } from './components/manager/manager-users/manager-users';
import { ManagementLottery } from './components/manager/management-lottery/management-lottery';
import { AdminDashboard } from './components/manager/admin-dashboard/admin-dashboard';
import { adminGuard } from './services/auth.guard';
import { About } from './pages/about/about';
export const routes: Routes = [
    { path: '', component: Home }, 
    { path: 'catalog', component: GiftCatalog },
    { path: 'about', component: About },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
     { path: 'checkout', component: Checkout },
    { 
        path: 'manager',
        canActivate: [adminGuard],
        children: [
            { path: '', component: AdminDashboard },
            { path: 'gifts', component: GiftGallery },
            { path: 'donors', component: ManagementDonor },
            { path: 'users', component: ManagerUsers },
            { path: 'lottery', component: ManagementLottery },
        ]
    },

    { path: '**', redirectTo: '' }
];