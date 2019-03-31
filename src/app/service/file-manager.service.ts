import { File } from '@ionic-native/file/ngx';
import { Device } from '@ionic-native/device/ngx';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileManagerService {

  private getBaseFolderPath(): string {
    const platform: string = this.device.platform;
    if (platform == null) {
      return '';
    } else if (platform.toUpperCase() === 'ADNROID') {
      return this.file.dataDirectory;
    } else if (platform.toUpperCase() === 'IOS') {
      return this.file.syncedDataDirectory;
    }
    return '';
  }

  constructor(
    private file: File,
    private device: Device
    ) { }

  public writeFile(fileName: string, content: string): void {

    const path = this.getBaseFolderPath();
    if (path === '') {
      return;
    }

    this.file.writeExistingFile(this.getBaseFolderPath(), fileName, content)
    .then((result) => {
      console.log('写入成功' + result);
    })
    .catch((result: any) => {
      this.file.writeFile(this.getBaseFolderPath(), fileName, content)
      // tslint:disable-next-line:no-shadowed-variable
      .then((result) => {
        console.log('创建&写入成功' + result);
      })
      // tslint:disable-next-line:no-shadowed-variable
      .catch((result) => {
        console.log('创建&写入失败' + result);
      });
    });
  }

  public readFile(fileName: string): Promise<string> {
    const path = this.getBaseFolderPath();
    if (path === '') {
      return Promise.resolve('[]');
    }
    return this.file.readAsText(path, fileName);
  }
}
