import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsComponent } from './products.component';
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
  { path: 'viewproduct', component: ViewProductComponent },
  { path: 'allproducts', component: ViewAllProductsComponent },
  { path: 'productsbydate', component: ViewProductByDateComponent },
  { path: 'productsbycategory', component: ViewProductByCategoryComponent },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
