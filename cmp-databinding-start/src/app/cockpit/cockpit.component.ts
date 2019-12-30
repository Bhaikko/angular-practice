import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // Creating events to trigger in parent component
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output("bpCreated") blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  // newServerName = '';
  // newServerContent = '';
  
  // accessing ref vairables from component template in component typescript class
  @ViewChild('serverContentInput', { static: true }) serverContentInput: ElementRef;  // this is ElementRef type

  onAddServer (nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  
  onAddBlueprint (nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }




  constructor() { }

  ngOnInit() {
    // Lifecycle hook
  }

 
}
