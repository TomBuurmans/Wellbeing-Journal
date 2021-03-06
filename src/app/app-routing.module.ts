import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { UserResolver } from './user/user.resolver';
import { AuthGuard } from './core/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'user', component: UserComponent,  resolve: { data: UserResolver}},
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  { path: 'journal', loadChildren: './journal/journal.module#JournalPageModule' },
  { path: 'newentry', loadChildren: './newentry/newentry.module#NewEntryPageModule' },
  { path: 'entry', loadChildren: './entry/entry.module#EntryPageModule' },
  { path: 'stats', loadChildren: './stats/stats.module#StatsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
