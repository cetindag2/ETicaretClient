import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { HubUrls } from 'src/app/constants/hub-url';
import { ReceiveFunctions } from 'src/app/constants/receive-functions';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
import { SignalRService } from 'src/app/services/common/signalr.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  extends BaseComponent implements OnInit {

  constructor(private alertfy : AlertifyService , spinner: NgxSpinnerService,
     private signalRService : SignalRService) 
  {
    super(spinner)
    signalRService.start(HubUrls.ProductHub)
   }

  ngOnInit(): void {
    this.signalRService.on(ReceiveFunctions.ProductAddedmessageReceieveFunction, message => {
      this.alertfy.message(message,{
        messageType:MessageType.Notify,
        position:Position.TopRight
      })
    });
  }
  m() {

  }
  d() {

  }
  
}
