import { Component, Input, OnInit } from '@angular/core';
import { Brand } from '../shared/models/brand.model';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {

  @Input() brandChild?: Brand;

  constructor() { }

  ngOnInit(): void {
  }

}
