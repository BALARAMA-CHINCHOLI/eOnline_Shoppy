import { Component, inject, signal } from '@angular/core';
import { PrimaryButtonComponent } from "../primary-button/primary-button.component";
import { CommonModule } from '@angular/common';
import { ProductListComponent } from "../../pages/product-list/product-list.component";
import { CartService } from '../../services/cart.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, PrimaryButtonComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
 
  //title = 'E-commerce APP'
  title = signal<string>('E-commerce APP');


  //cart1 = signal('Cart');

  //use service by injecting "cart.service.ts"
  cartService = inject(CartService)

  showButtonClicked(){
    console.log('Clicked');
  }
}
