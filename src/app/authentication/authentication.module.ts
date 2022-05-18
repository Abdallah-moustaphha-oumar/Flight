import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthemticationComponent } from './authemtication/authemtication.component';
import { LoginComponent } from './authemtication/login/login.component';
import { RegistrationComponent } from './authemtication/registration/registration.component';
import {MatCardModule} from '@angular/material/card'
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {MatInputModule} from '@angular/material/input'
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { PortalModule } from '../portal/portal.module';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { authInterceptorProviders } from './intercepteur.interceptor';






@NgModule({
  declarations: [
    AuthemticationComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    RouterModule,
    MatButtonModule,
    PortalModule,
    MatIconModule,
    MatToolbarModule,
    ReactiveFormsModule
  ],

  providers:[authInterceptorProviders]
})


export class AuthenticationModule { }
