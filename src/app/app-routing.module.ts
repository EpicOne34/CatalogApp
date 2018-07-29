import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { DynamicNavbarComponent } from './components/dynamic-navbar/dynamic-navbar.component';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { EditCatalogComponent } from './components/edit-catalog/edit-catalog.component';
import { UsersAdminComponent } from './components/users-admin/users-admin.component';
import { CatalogAdminComponent } from './components/catalog-admin/catalog-admin.component';
import { CatalogDetailViewComponent } from './components/catalog-detail-view/catalog-detail-view.component';
import { CreateCatalogComponent } from './components/create-catalog/create-catalog.component';
import { CreateCatalogTemplateComponent } from './components/create-catalog-template/create-catalog-template.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'admin/catalog', component: CatalogAdminComponent},
  {path: 'catalog/details', component: CatalogDetailViewComponent},
  {path: 'catalog/create', component: CreateCatalogComponent},
  {path: 'catalog/create/templates', component: CreateCatalogTemplateComponent},
  {path: 'catalog/details/edit/:id', component: EditCatalogComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'settings', component: SettingsComponent},
  {path: 'admin/users', component: UsersAdminComponent},
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