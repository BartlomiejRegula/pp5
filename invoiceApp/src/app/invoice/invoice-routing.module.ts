import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { ProductFormComponent } from '../product/components/product-form/product-form.component';

const routes: Routes = [
  { path: 'customer-form', component: CustomerFormComponent },
  { path: 'product-form', component: ProductFormComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule { }