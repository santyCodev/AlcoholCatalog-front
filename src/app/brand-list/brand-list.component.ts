import { Component, OnInit } from '@angular/core';
import { Brand } from '../shared/models/brand.model';
import { BrandService } from '../shared/services/brand.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss']
})
export class BrandListComponent implements OnInit {

  public brandList: Array<Brand> = [];

  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.getBrandList();
  }

  private getBrandList(): void {
    this.brandList = this.brandService.getAllBrands();
  }
}
