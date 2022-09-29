import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.scss']
})
export class ViewProductComponent implements OnInit {
  productId = 0;


  constructor(public _activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activedRoute.params.subscribe(data => {
      this.productId = data['id']
    })
  }

}
