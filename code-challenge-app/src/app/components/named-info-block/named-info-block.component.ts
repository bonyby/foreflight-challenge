import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-named-info-block',
  templateUrl: './named-info-block.component.html',
  styleUrls: ['./named-info-block.component.scss'],
})
export class NamedInfoBlockComponent {
  @Input() name: string = '';
  @Input() info: string = '';
}
