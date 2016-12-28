import {Component, OnInit} from '@angular/core';
import {ApiDocService} from './services/apidoc.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  ngOnInit(): void {
    this._apiService.getApi().subscribe(console.log);
  }

  constructor(private _apiService: ApiDocService) {

  }

}
