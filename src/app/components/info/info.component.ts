import {Component, OnInit, Input} from '@angular/core';
import {ApiDefinition} from '../../model/api-definition';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  @Input() definition: ApiDefinition;

  constructor() {
  }

  ngOnInit() {
  }

}
