import { Component, Inject, OnInit } from '@angular/core';
import { Product, Promotion } from '../../../core/models';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BackendService } from '../../../core/service/backend-service.service';

@Component({
  selector: 'app-promotion-modal',
  standalone: true,
  imports: [],
  templateUrl: './promotion-modal.component.html',
  styleUrl: './promotion-modal.component.css'
})
export class PromotionModalComponent implements OnInit {

  promotion: Promotion = new Promotion();
  constructor(@Inject(MAT_DIALOG_DATA) public data: Product, private backServcice: BackendService) { }
  ngOnInit(): void {
    this.getPromotion();
  }

  getPromotion() {
    this.backServcice.getProductPromotions(this.data.id!).subscribe(res =>{
      this.promotion = res;
    })
  }

}
