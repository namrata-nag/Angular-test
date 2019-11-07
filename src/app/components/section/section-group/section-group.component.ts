import { Component, OnInit,ContentChild } from '@angular/core';

@Component({
  selector: 'app-section-group',
  templateUrl: './section-group.component.html',
  styleUrls: ['./section-group.component.css']
})
export class SectionGroupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
// @Component({
//   selector: 'app-section-group',
//   template: `
//     <ng-content></ng-content>
//   `,
//   changeDetection: ChangeDetectionStrategy.OnPush
// })
// export class SectionGroupComponent {
//   @ContentChild(AccordionHeaderComponent) 
//   header: AccordionHeaderComponent;
  
//   @ContentChild(AccordionContentComponent) 
//   content: AccordionContentComponent;

//   toggle() {
//     this.header.isOpen = !this.header.isOpen;
//     this.content.isOpen = !this.content.isOpen;
//   }
// }