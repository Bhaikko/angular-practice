import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated // Assigning encapsulation for component
})
export class ServerElementComponent implements OnInit {

  // To expose property to parent components, @Input() is used
  // Passing argument to @Input() is for giving an alias
  @Input('srvElement') element: {
    type: string, 
    name: string, 
    content: string
  };

  constructor() { }

  ngOnInit() {
  }

}
