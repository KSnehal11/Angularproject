import { Component } from '@angular/core';
import { BodyComponent } from '../body/body.component';
import { HeaderComponent } from '../header/header.component';
import { NotificationComponent } from '../notification/notification.component';
import { ProductsComponent } from '../products/products.component';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [HeaderComponent,BodyComponent ,NotificationComponent , SearchComponent , ProductsComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

}
