import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import 'rxjs/add/operator/let';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../reducers';
import {ApiDocService} from '../../services/apidoc.service';
import {Observable} from 'rxjs/Observable';
import {ApiDefinition} from '../../model/api-definition';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  definition: Observable<ApiDefinition>;
  apiUrl: Observable<string>;

  constructor(private store: Store<fromRoot.State>, private _swaggerService: ApiDocService) {
    /**
     * Selectors can be applied with the `select` operator which passes the state
     * tree to the provided selector
     */
  }

  ngOnInit(): void {

    this.definition = this._swaggerService.getSwaggerApiDefinition();
    this.apiUrl = this._swaggerService.getApiUrl();
  }

  onApiChange(url: string) {
    this._swaggerService.loadSwaggerApiDefinition(url);
  }

}
