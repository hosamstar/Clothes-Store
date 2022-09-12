import { ProductsService } from './../../services/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {

  products:any[] = []
  categories:any = []

  constructor(private service:ProductsService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCategories
  }

  getProducts(){
    this.service.getAllProducts().subscribe((res:any) => {
      this.products = res;
    }, error => {
      alert("Error")
    })
  }

  getCategories(){
    this.service.getAllCategories().subscribe((res:any) => {
      this.categories = res;
    }, error => {
      alert("Error")
    })
  }

}
