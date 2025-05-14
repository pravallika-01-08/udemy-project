import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { BusinessComponent } from './business/business.component';
import { TeachOnUdemyComponent } from './teach-on-udemy/teach-on-udemy.component';
import { PlansPricingComponent } from './plans-pricing/plans-pricing.component';



export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'signUp', component: SignUpComponent },
    { path: 'business', component: BusinessComponent },
    { path: 'teachOnUdemy', component: TeachOnUdemyComponent },
    { path: 'plans-pricing', component: PlansPricingComponent },

];
