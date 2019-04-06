import { Injectable } from '@angular/core';
import { FileManagerService } from './file-manager.service';
import { Subject } from 'rxjs';
import { Entity } from '../models/entity';
import { Type } from '@angular/compiler';
import { UUIDUtils } from '../common/tools/uuid-Utils';


export class EntityManagerService<T extends Entity> {

  private entityListSubject = new Subject<Array<T>>();

  private entityList = new Array<T>();

  private typeName: string;

  private fileName: string;

  constructor(private fileManager: FileManagerService, typeName: string) {
    this.fileName = this.typeName + '.json';
  }

  public get(entityId: string): Subject<T> {
    const entity = new Subject<T>();
    this.fileManager.readFile(this.fileName).catch(result => {
      entity.next(result);
    });
    return entity;
  }

  private loadList() {
    this.fileManager.readFile(this.fileName).catch(result => {
      this.entityList = JSON.parse(result);
      this.entityListSubject.next(this.entityList);
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
    this.entityListSubject.next(this.entityList);
    this.fileManager.writeFile(this.fileName, JSON.stringify(this.entityList));
  }

}
