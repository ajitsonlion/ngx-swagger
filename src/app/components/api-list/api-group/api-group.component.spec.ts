/* tslint:disable:no-unused-variable */
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {ApiGroupComponent} from './api-group.component';

describe('ApiGroupComponent', () => {
  let component: ApiGroupComponent;
  let fixture: ComponentFixture<ApiGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ApiGroupComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
