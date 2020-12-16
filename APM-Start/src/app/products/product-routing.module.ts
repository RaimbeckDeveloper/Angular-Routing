import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductListComponent } from './product-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'products/:id/edit', component: ProductEditComponent },
  {
    path: 'products/:id',
    component: ProductDetailComponent,
  },
  {
    path: 'products',
    component: ProductListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}
