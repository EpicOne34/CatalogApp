import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { DynamicNavbarComponent } from './components/dynamic-navbar/dynamic-navbar.component';
import { MainNavbarComponent } from './components/main-navbar/main-navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UsersAdminComponent } from './components/users-admin/users-admin.component';
import { CatalogAdminComponent } from './components/catalog-admin/catalog-admin.component';
import { CatalogDetailViewComponent } from './components/catalog-detail-view/catalog-detail-view.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { SettingsComponent } from './components/settings/settings.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRoutingModule } from './/app-routing.module';
import { EditCatalogComponent } from './components/edit-catalog/edit-catalog.component';
import { CreateCatalogComponent } from './components/create-catalog/create-catalog.component';
import { CreateCatalogTemplateComponent } from './components/create-catalog-template/create-catalog-template.component';
import { UsersService } from './services/users.service';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RemindersComponent } from './components/reminders/reminders.component';
import { CatalogFavoritesComponent } from './components/catalog-favorites/catalog-favorites.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DialogComponent } from './framework/dialog/dialog.component';
import { FormComponent } from './framework/form/form.component';
import { ButtonComponent } from './framework/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicNavbarComponent,
    MainNavbarComponent,
    DashboardComponent,
    UsersAdminComponent,
    CatalogAdminComponent,
    CatalogDetailViewComponent,
    RegisterComponent,
    LoginComponent,
    SettingsComponent,
    NotFoundComponent,
    EditCatalogComponent,
    CreateCatalogComponent,
    CreateCatalogTemplateComponent,
    LandingPageComponent,
    RemindersComponent,
    CatalogFavoritesComponent,
    ProfileComponent,
    DialogComponent,
    FormComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase,'CatalogApp'),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }