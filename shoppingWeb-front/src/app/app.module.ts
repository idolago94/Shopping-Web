import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatBadgeModule} from '@angular/material/badge';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';

import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { StoreComponent } from './components/store/store.component';
import { CartComponent } from './components/cart/cart.component';
import { AllproductsComponent } from './components/allproducts/allproducts.component';
import { CartProductComponent } from './components/cart-product/cart-product.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { LogoComponent } from './components/logo/logo.component';
import { HeaderComponent } from './components/header/header.component';
import { PreviewOrderComponent } from './components/preview-order/preview-order.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    HomeComponent,
    StoreComponent,
    CartComponent,
    AllproductsComponent,
    CartProductComponent,
    SingleProductComponent,
    InvoiceComponent,
    LogoComponent,
    HeaderComponent,
    PreviewOrderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,

    // angular material components
    BrowserAnimationsModule,
    MatGridListModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatCardModule,
    MatDialogModule,
    MatTooltipModule,
    MatBadgeModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,

    ReactiveFormsModule,
    RouterModule.forRoot([
      { path:"", component: HomeComponent },
      { path:"register", component: RegisterComponent },
      { path:"store", component: StoreComponent },
      { path:"cart", component: CartComponent },
      { path:"invoice", component: InvoiceComponent },
      { path:"logo", component: LogoComponent },
      { path:"previeworder", component: PreviewOrderComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
