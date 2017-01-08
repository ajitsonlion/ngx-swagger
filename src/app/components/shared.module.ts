import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CovalentCoreModule} from '@covalent/core';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {ToolBarComponent} from './tool-bar/tool-bar.component';
import {InfoComponent} from './info/info.component';
import {ApiListComponent} from './api-list/api-list.component';
import {ApiGroupComponent} from './api-list/api-group/api-group.component';
import {ApiItemComponent} from './api-list/api-item/api-item.component';

let COMPONENTS: any[] = [ToolBarComponent, InfoComponent, ApiListComponent, ApiGroupComponent, ApiItemComponent];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule,
    CovalentCoreModule,
  ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS]
})
export class SharedModule {
}
