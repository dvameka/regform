import { Component, Input, OnInit } from '@angular/core';
import { ProductReview } from '../shared/product-review';
@Component({
  selector: 'app-product-review',
  templateUrl: './product-review.component.html',
  styleUrls: ['./product-review.component.css']
})
export class ProductReviewComponent implements OnInit {
  @Input() reviewsProduct: ProductReview[];
  title :string = "Reviews";
  constructor() { }

  ngOnInit() {
  }

}
