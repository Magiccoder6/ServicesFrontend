import { ChangeDetectorRef, Component, Injectable, OnInit } from '@angular/core';
import { NgxSpinnerService } from "ngx-spinner";
import { LoaderService } from '../../_services/loader/loader.service'

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})

export class LoadingComponent implements OnInit {
  showSpinner=false
  constructor(private spinner: NgxSpinnerService, private loader: LoaderService,private ref:ChangeDetectorRef) {
    
  }

  ngOnInit() {
    this.init()
    /** spinner starts on init */
    //this.spinner.show();
 
    //setTimeout(() => {
     // /** spinner ends after 3 seconds */
      //this.spinner.hide();
    //}, 10000);
  }

  init() {
    this.loader.getSpinnerObserver().subscribe(status => {
      if (status == 'start')
        this.spinner.show()
      else if (status == 'stop') {
        this.spinner.hide()
      }
      this.ref.detectChanges()
    })
  }

  displaySpinner() {
    this.spinner.show()
  }
  
}