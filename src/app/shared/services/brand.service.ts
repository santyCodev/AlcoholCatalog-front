import { Injectable } from '@angular/core';
import { Brand } from '../models/brand.model';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  constructor() { }

  public getAllBrands(): Array<Brand> {
    return this.getMockBrands();
  }

  private getMockBrands(): Array<Brand> {
    let mockBrands: Array<Brand> = [];
    mockBrands.push(
      {
        title: 'Card Title',
        imageUrl: 'https://i.redd.it/b3esnz5ra34y.jpg',
      },
      {
        title: 'Card Title',
        imageUrl: 'https://cdn.blackmilkclothing.com/media/wysiwyg/Wallpapers/PhoneWallpapers_FloralCoral.jpg',
      },
      {
        title: 'Card Title',
        imageUrl: 'https://media.giphy.com/media/10SvWCbt1ytWCc/giphy.gif',
      },
      {
        title: 'Card Title',
        imageUrl: 'https://media.giphy.com/media/LwIyvaNcnzsD6/giphy.gif',
      },
    );
    return mockBrands;
  }
}
