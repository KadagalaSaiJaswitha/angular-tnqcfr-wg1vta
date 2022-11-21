import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NotificationComponent } from './notification/notification.component';
import { ProfileComponent } from './profile/profile.component';
import { PaymentComponent } from './payment/payment.component';
import { HomeComponent } from './home/home.component';
import { OrderManagementComponent } from './order-management/order-management.component';



@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'product-details', component: ProductDetailsComponent },
      { path: 'signup', component: SignUpComponent },
      { path: 'notification', component: NotificationComponent },
      { path: 'wishlist', component: WishlistComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'product-list', component: ProductListComponent },
      { path: 'home', component: HomeComponent },
      { path: 'ordermanagement', component: OrderManagementComponent },
      
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    LoginComponent,
    ProductDetailsComponent,
    WishlistComponent,
    SignUpComponent,
    NotificationComponent,
    ProfileComponent,
    PaymentComponent,
    HomeComponent,
    OrderManagementComponent
 
   
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/