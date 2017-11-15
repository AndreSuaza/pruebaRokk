import { Component } from '@angular/core';
import {ActivityService} from './services/activity.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor( public _as:ActivityService ){}

}
