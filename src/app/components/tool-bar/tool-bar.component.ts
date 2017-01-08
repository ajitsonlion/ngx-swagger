import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
  Renderer,
  AfterViewInit
} from '@angular/core';
import {ApiDefinition} from '../../model/api-definition';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ToolBarComponent implements OnInit,  AfterViewInit {


  @Input() definition: ApiDefinition;
  @Input() apiUrl: string;
  @Output() apiChange = new EventEmitter<string>();
  @ViewChild('api') apiInput: ElementRef;
  editable: boolean = false;

  constructor(private  renderer: Renderer) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }

  onEdit() {
    this.editable = true;
  }

  changeApi(url: string) {
    this.editable = false;
    this.apiChange.emit(url);
  }
}
