import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.css']
})
export class SectionHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
// @Component({
//   selector: 'app-section-header',
//   template: `
//     <ng-content></ng-content>
//   `
//   // changeDetection: ChangeDetectionStrategy.OnPush
// })
// export class SectionHeaderComponent {
//   // click$ = fromEvent(this.host.nativeElement, 'click');
//   _isOpen = false;

//   @Input()
//   @HostBinding("class.accordion-open")
//   set isOpen(value: boolean) {
//     if (this.isOpen !== value) {
//       this._isOpen = value;
//       this.cdr.markForCheck();
//     }
//   }

//   get isOpen() {
//     return this._isOpen;
//   }
//   constructor() {}
//   // constructor(private host: ElementRef,
//   //             private cdr: ChangeDetectorRef) {}
// }