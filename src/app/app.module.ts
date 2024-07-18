import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatTabsModule } from '@angular/material/tabs';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { ToDoComponent } from './Components/to-do/to-do.component';
import { FormsModule } from '@angular/forms';
import { UsersListComponent } from './Components/users-list/users-list.component';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import { UserComponent } from './Components/user/user.component';


@NgModule({
  declarations: [
    AppComponent,
    ToDoComponent,
    UsersListComponent,
    UserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule,
    MatIconModule
    
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
