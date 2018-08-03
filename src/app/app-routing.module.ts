import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { CatalogAdminComponent } from './components/catalog-admin/catalog-admin.component';
import { CatalogDetailViewComponent } from './components/catalog-detail-view/catalog-detail-view.component';
import { CatalogFavoritesComponent } from './components/catalog-favorites/catalog-favorites.component';
import { CreateCatalogComponent } from './components/create-catalog/create-catalog.component';
import { CreateCatalogTemplateComponent } from './components/create-catalog-template/create-catalog-template.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditCatalogComponent } from './components/edit-catalog/edit-catalog.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { SettingsComponent } from './components/settings/settings.component';
import { UsersAdminComponent } from './components/users-admin/users-admin.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  {path: 'home', component: DashboardComponent},
  {path: 'admin/catalog', component: CatalogAdminComponent},
  {path: 'admin/users', component: UsersAdminComponent},
  {path: 'catalog/create', component: CreateCatalogComponent},
  {path: 'catalog/create/templates', component: CreateCatalogTemplateComponent},
  {path: 'catalog/details', component: CatalogDetailViewComponent},
  {path: 'catalog/details/edit/:id', component: EditCatalogComponent},
  {path: 'catalog/favorites', component: CatalogFavoritesComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'reminders', component: RemindersComponent},
  {path: 'settings', component: SettingsComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }