import { Injectable } from '@angular/core';
import { FileManagerService } from './file-manager.service';
import { Subject } from 'rxjs';
import { Entity } from '../models/entity';

@Injectable({
  providedIn: 'root'
})
export class EntityManagerService {

  constructor(public fileManager: FileManagerService) { }

  public get<T extends Entity>(entityId: string,typeName: string): Subject<T> {
    let entity = new Subject<T>();
    const fileName = typeName + ".json"
    this.fileManager.readFile(fileName).catch(result => {      
      entity.next(result)
    });
    return entity;
  }
  public list<T extends Entity>(typeName: string): Subject<Array<T>> {
    let entityList = new Subject<Array<T>>();
    const fileName = typeName + ".json"
    this.fileManager.readFile(fileName).catch(result => {      
      entityList.next(JSON.parse(result));
    });
    return entityList;
  }
}
