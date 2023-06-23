import { AfterViewInit, ChangeDetectorRef, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Data, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  private productId?: string;
  private productName?: any

  constructor(
    private activatedRoute: ActivatedRoute, 
    private changeDetectorRef: ChangeDetectorRef, 
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(
      (next => {
        this.productId = next.get("id") as string
        this.productName = history.state.name
      })
    )
  }

  ngOnDestroy(): void {
    this.productName = ""
  }

  get ProductId() {
    return this.productId;
  }

  get ProductName() {
    return this.productName
  }
}
