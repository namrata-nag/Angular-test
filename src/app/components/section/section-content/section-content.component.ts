import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-section-content',
  templateUrl: './section-content.component.html',
  styleUrls: ['./section-content.component.css']
})
export class SectionContentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
// @Component({
//   selector: 'app-section-content',
//   template: `
//     <div *ngIf="isOpen">
//       <ng-content></ng-content>
//     </div>
//   `,
//   changeDetection: ChangeDetectionStrategy.OnPush
// })
// export class SectionContentComponent {
//   _isOpen = false;

//   @Input()
//   set isOpen(value: boolean) {
//     if (this._isOpen !== value) {
//       this._isOpen = value;
//       this.cdr.markForCheck();
//     }
//   }

//   get isOpen() {
//     return this._isOpen;
//   }

//   constructor(private cdr: ChangeDetectorRef) {}
// }