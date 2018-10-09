import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from './shared/task.service';
import { HttpModule } from '@angular/http';

// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule } from 'angularfire2/database';
// import { environment } from '../environments/environment';


import { AppComponent } from './app.component';
import { NewItemComponent } from './new-item/new-item.component';
import { HeaderComponent } from './header/header.component';
import { TaskDetailsComponent } from './new-item/task-item/task-details/task-details.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { Routes, RouterModule } from '@angular/router';
import { ListsComponent } from './lists/lists.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { TaskItemComponent } from './new-item/task-item/task-item.component';

import { DataStorageService } from './shared/data-storage.service';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth-guard.service';

//Import toast module
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker'
import { environment } from '../environments/environment';
import { ListViewComponent } from './list-view/list-view.component';


const appRoutes: Routes = [
  { path: '' , redirectTo: '/signin',pathMatch: 'full'  },
  { path: 'home', component: NewItemComponent},
  { path: 'signin' , component: SigninComponent },
  { path: 'signup' , component: SignupComponent },
  { path: 'lists' , component: ListsComponent },
  { path: 'listview/:type' , component: ListViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NewItemComponent,
    HeaderComponent,
    TaskDetailsComponent,
    SignupComponent,
    SigninComponent,
    ListsComponent,
    DropdownDirective,
    TaskItemComponent,
    ListViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpModule, BrowserAnimationsModule, ToastModule.forRoot(),
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : []
  ],
  providers: [TaskService, DataStorageService, AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
