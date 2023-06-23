import { Component } from '@angular/core';
import { ProductGuard } from './guards/product.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';

  constructor() {
  }
}
