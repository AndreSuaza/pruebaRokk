import { Component } from '@angular/core';
import { ActivityService } from '../../services/activity.service';
@Component({
  selector: 'app-linea',
  templateUrl: './linea.component.html'
})
export class LineaComponent{

  lineas:any[] = [];
  data:any[] = [];
  info:any {};


  constructor(public _as:ActivityService){

    _as.cargar_info ()
        .subscribe( res => {
          this.info = res.json();
          //console.log(this.info);
          for(var i in this.info){
              this.lineas.push(this.info[i].zoneId);
          }
        });
    
  }


  public lineChartData:Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40]},
    {data: [28, 48, 40, 19, 86, 27, 90]},
    {data: [18, 48, 77, 9, 100, 27, 40]},
    {data: [65, 59, 80, 81, 56, 55, 40]},
    {data: [28, 48, 40, 19, 86, 27, 90]},

  ];

  public lineChartLabels:Array<any> =  this.lineas;

  public lineChartOptions:any = {
    responsive: true
  };

  public lineChartLegend:boolean = false;
  public lineChartType:string = 'line';

}
