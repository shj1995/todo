import { Component, OnInit } from '@angular/core';
import { Device } from '@ionic-native/device/ngx';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private device: Device) { }

  ngOnInit() {
  }

}
