import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  api: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  ngOnInit(): void {

  }

  constructor() {

  }

}
