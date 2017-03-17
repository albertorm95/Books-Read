import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

// "Goblal/Main" Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

// UserComponents
import { RegisterComponent } from './components/userModule/register/register.component';
import { LoginComponent } from './components/userModule/login/login.component';
import { DashboardComponent } from './components/userModule/dashboard/dashboard.component';
import { ProfileComponent } from './components/userModule/profile/profile.component';

// BookComponents
import { BookComponent } from './components/bookModule/book/book.component';
import { BooksComponent } from './components/bookModule/books/books.component'
import { CreateBookComponent } from './components/bookModule/createbook/createbook.component';

// Services
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { AuthGuard } from './guards/auth.guard';
import { BookService } from './services/book.service';

const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile', component:ProfileComponent},
  {path:'books', component:BooksComponent},
  {path:'book/:id', component:BookComponent},
  {path:'createbook', component:CreateBookComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    BookComponent,
    BooksComponent,
    CreateBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule
  ],
  providers: [ValidateService, AuthService, AuthGuard,
    BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
