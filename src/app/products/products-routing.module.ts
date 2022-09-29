import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ProductsComponent } from './products.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { ViewProductByCategoryComponent } from './view-product-by-category/view-product-by-category.component';
import { ViewProductByDateComponent } from './view-product-by-date/view-product-by-date.component';
import { ViewProductComponent } from './view-product/view-product.component';

// AddProductComponent,
//     ViewProductComponent,
//     UpdateProductComponent,
//     DeleteProductComponent,
//     ViewAllProductsComponent,
//     ViewProductByDateComponent,
//     ViewProductByCategoryComponent

const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'addproduct', component: AddProductComponent },
  { path: 'viewproduct/:id', component: ViewProductComponent },
  { path: 'updateproduct/:id', component: UpdateProductComponent },
  { path: 'allproducts', component: ViewAllProductsComponent },
  { path: 'search-date', component: ViewProductByDateComponent },
  { path: 'search-cat', component: ViewProductByCategoryComponent },
  { path: 'del-product', component: DeleteProductComponent },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
