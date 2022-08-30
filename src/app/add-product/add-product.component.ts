import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product : Product=new Product();
  Category=['Clothing', 'Electronics', 'Electrical', 'Grocery', 'Footwear'];

  constructor(private productService:ProductService,
    private userService : UserService,
    private router:Router) { }

  ngOnInit(): void {
  }
  

  saveProduct(){
    const loggedInUser = this.userService.getLoggedInUser();

    this.product.sellerId = loggedInUser.id;

    console.log(this.product);    

    this.productService.createProduct(this.product).subscribe(data =>{
      console.log(data);},
      error => console.log(error));
      
      
      this.gotoUserList();
      
    

  }

  gotoUserList(){
    this.router.navigate(['/homepage/product-list']);
  }

  onAdd(){
    console.log(this.product);
    this.saveProduct();
  
  }

}
