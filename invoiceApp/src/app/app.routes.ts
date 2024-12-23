import { Routes } from '@angular/router';
import { ProductFormComponent } from './product/components/product-form/product-form.component';


export const routes: Routes = [
    {path: 'customer-form', component: ProductFormComponent},
    {
        path: 'invoice',
        loadChildren: () => import('.invoice/invoice.module').then( m => m.InvoiceModule)
    },
];
