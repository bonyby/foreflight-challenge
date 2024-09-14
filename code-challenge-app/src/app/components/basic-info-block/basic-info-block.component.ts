import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-basic-info-block',
  templateUrl: './basic-info-block.component.html',
  styleUrls: ['./basic-info-block.component.scss'],
})
export class BasicInfoBlockComponent {
  @Input() info: string = '';
}
