import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UserRegistrationService } from './services/user-registration.service';
import { SecurityModule } from './modules/security/security.module';
import { ProductReviewComponent } from './product-review/product-review.component';
import { ListUsersComponent } from './list-users/list-users.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductReviewComponent,
    ListUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    SecurityModule
  ],
  providers: [
    UserRegistrationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
