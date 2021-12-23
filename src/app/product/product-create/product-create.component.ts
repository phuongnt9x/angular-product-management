import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/category";

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup = new FormGroup({
    id: new FormControl(""),
    name: new FormControl(""),
    price: new FormControl(""),
    description: new FormControl(""),
    category: new FormControl("")
  },Validators.required);
  categories: Category[]=[];
  constructor(private productService: ProductService,private categoryService: CategoryService) { }


  ngOnInit(): void {
    this.getAllCategory();
  }
  submit() {
    const product = this.productForm.value;
    this.productService.saveProduct(product).subscribe(()=>{
      alert("Tao thanh cong")
    },error => {
      console.log(error);
    })
    this.productForm.reset();
  }
  getAllCategory(){
  this.categoryService.getAll().subscribe(categories =>{
    this.categories=categories;
  })
  }

}
