import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [],
  template: '<div class="alert alert-success" [hidden]="displayNotification"><p>This webpage use cookies</p> <button (click)="closeNotification()" class="btn btn-danger">close</button></div>',
  styles: ['.notification-div {background-color : grey ; margin: 10px;padding:10px}']
})
export class NotificationComponent {
    displayNotification : boolean = true;
    closeNotification () {
      this.displayNotification = true;
    }
}
