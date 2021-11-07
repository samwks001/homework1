import { Component, Input, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.scss']
})
export class StageComponent implements OnInit {
  @Input() stage : any;

  constructor() {
  }

  ngOnInit(): void {
    console.log('onInit');
    console.log(this.stage);
  }
  drop(event: CdkDragDrop<any[]>) {
    moveItemInArray(this.stage.task, event.previousIndex, event.currentIndex);
  }
}
