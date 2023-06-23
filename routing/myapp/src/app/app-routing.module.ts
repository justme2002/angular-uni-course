import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product/product-detail/product-detail.component';
import { ProductGuard } from './guards/product.guard';
import { ProductDetailGuard } from './guards/product-detail.guard';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent, 
  },
  {
    path: "products",
    component: ProductComponent,
    canActivate: [ProductGuard],
    canActivateChild: [ProductDetailGuard],
    children: [
      {
        path: ":id",
        component: ProductDetailComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
