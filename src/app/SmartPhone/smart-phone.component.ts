import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

import { Subscription } from 'rxjs';
import { IPhone } from './phones';
import { IPosition } from '../Position/positions';
import { SmartPhoneServiceService } from './smart-phone-service.service';

@Component({
  selector: 'tr-smart-phone',
  templateUrl: './smart-phone.component.html',
  styleUrls: ['./smart-phone.component.css']
})
export class SmartPhoneComponent implements OnInit {
  public pageTitle :String='SmartPhone';
  sub!:Subscription;
  phones :IPhone[]=[];
  positions:IPosition[]=[];
  errorMessage :String='';
  numberPhone:number | undefined;
  constructor(private service:SmartPhoneServiceService) { }

  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart:any;

  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement; 
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
      type: 'line',
      data: {
          datasets: [{
              label: "Le nombre Des Positions",
              data: [0,0,0,10,20,5,2,10,20, 40, 50,0],
              backgroundColor: "rgb(115 185 243 / 65%)",
              borderColor: "#007ee7",
              fill: true,
          }],
          labels: ['January', 'February', 'March', 'April','mai',
          'juin','juillet','aout','septembre','octobre','novembre','decembre']
      },
  });
  }
  filterPositions():any{
    this.positions.filter((position:IPosition)=>
    position.phone.imei)
  }
  
  ngOnInit(): void {
    this.sub=this.service.getPhones().subscribe({
      next:phones=>{
        this.phones=phones;
      },
      error:error=>this.errorMessage=error
    });
    this.service.getPositions().subscribe({
      next:positions=>{
        this.positions=positions;
      }
    })
    
  }

}
