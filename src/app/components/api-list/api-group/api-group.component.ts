import {Component, OnInit, HostBinding, Input} from '@angular/core';
import {ApiDefinition} from '../../../model/api-definition';
import {slideInDownAnimation} from '../../../app.animations';
import {TagObject} from '../../../model/apidoc';
import {OperationObject} from '../../../model/api-operation';

@Component({
  selector: 'app-api-group',
  templateUrl: './api-group.component.html',
  styleUrls: ['./api-group.component.scss'],
  animations: [slideInDownAnimation],

})
export class ApiGroupComponent implements OnInit {
  @Input() definition: ApiDefinition;
  @Input() apiTag: TagObject;
  operations: Array<OperationObject> = [];
  expandCollapseExpansion1Msg: string = 'No expanded/collapsed detected yet';

  @HostBinding('@routeAnimation') routeAnimation: boolean = true;

  constructor() {
  }

  ngOnInit() {
    this.operations = this.definition.getOperationsByProperty(Array.of(this.apiTag.name), 'tags');
  }

  expandExpansion1Event(): void {
    this.expandCollapseExpansion1Msg = 'Expand event emitted.';
  }

  collapseExpansion1Event(): void {
    this.expandCollapseExpansion1Msg = 'Collapse event emitted.';
  }
}
