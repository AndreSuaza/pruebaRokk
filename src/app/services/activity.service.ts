import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ActivityService {

  constructor(public http:Http) {

  }

  public cargar_info(){
      return this.http.get("assets/data/activity-data.json");
  }

}
