import {Component, OnInit, Input} from '@angular/core';
import {ApiDefinition} from '../../model/api-definition';

@Component({
  selector: 'app-api-list',
  templateUrl: './api-list.component.html',
  styleUrls: ['./api-list.component.scss'],

})
export class ApiListComponent implements OnInit {

  @Input() definition: ApiDefinition;

  ngOnInit(): void {
  }
}
