import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { DetailsproductComponent } from './detailsproduct/detailsproduct.component';
import { ProductsComponent } from './products.component';
import { ProductsService } from 'src/app/services/products.service';
import { CategoriesComponent } from './categories/categories.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductsComponent,
    AddproductComponent,
    ViewproductComponent,
    DetailsproductComponent,
    CategoriesComponent,
  ],
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  providers: [ProductsService],
})
export class ProductsModule {}
