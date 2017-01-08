import {Component, OnInit, Input} from '@angular/core';
import {OperationObject} from '../../../model/api-operation';

@Component({
  selector: 'app-api-item',
  templateUrl: './api-item.component.html',
  styleUrls: ['./api-item.component.scss']
})
export class ApiItemComponent implements OnInit {

  @Input() operation: OperationObject;
  color: string = '';

  constructor() {
  }

  ngOnInit() {
    this.color = this.operation.getMethodClass();

  }

}
