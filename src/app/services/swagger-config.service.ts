import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {ApiDefinition} from '../model/api-definition';
import {ApiDocService} from './apidoc.service';

@Injectable()
export class SwaggerConfigService {

  private _config: Subject<ApiDefinition> = new Subject<ApiDefinition>();

  constructor(private _apiDocService: ApiDocService) {
  }

  getSwaggerConfig(location: string) {

  }
}
