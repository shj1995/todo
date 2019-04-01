import { Injectable } from '@angular/core';
import { EntityManagerService } from './entity-manager.service';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  private categoryList: Array<Category>;

  constructor(public entityManager: EntityManagerService) {
    this.entityManager.list<Category>(Category.typeName).subscribe(result => {
      this.categoryList = result;
    });
  }
  private getById(entityId: string): Category {    
    let category: Category = null;
    this.categoryList.forEach(item => {
      if(item.id === entityId) {
        category = item;
      }
    });
    return category;
  }

  private create() {

  }
  private update() {

  }
}
