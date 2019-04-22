import { Injectable } from '@angular/core';
import { FileManagerService } from './file-manager.service';
import { Subject } from 'rxjs';
import { Entity } from '../models/entity';
import { Type } from '@angular/compiler';
import { UUIDUtils } from '../common/tools/uuid-utils';
import { Task } from '../models/task';


export class EntityManagerService<T extends Entity> {

  private entityListSubject = new Subject<Array<T>>();

  private entityList = new Array<T>();

  private fileName: string;

  constructor(private fileManager: FileManagerService, typeName: string) {
    this.fileName = typeName + '.json';
  }

  public get(entityId: string): Subject<T> {
    const entity = new Subject<T>();
    this.fileManager.readFile(this.fileName).catch(result => {
      entity.next(result);
    });
    return entity;
  }

  private loadList() {
    // alert('loadFileing...');
    this.fileManager.readFile(this.fileName).then(result => {
      // alert(result);
      (JSON.parse(result) as Array<T>).forEach(item => {
        this.entityList.push(item);
      });
      this.entityListSubject.next(this.entityList);
    }).catch(result => {
      // alert(result);
    });
  }
  public getEntityListSubject(): Subject<Array<T>> {
    return this.entityListSubject;
  }


  public list(): Array<T> {
    this.loadList();
    return this.entityList;
  }

  public create(entity: T) {
    if (!entity.id) {
      entity.id = UUIDUtils.generate();
    }
    console.log(entity.id);
    this.entityList.push(entity);
    // this.entityListSubject.next(this.entityList);
    this.fileManager.writeFile(this.fileName, JSON.stringify(this.entityList));
  }

}
