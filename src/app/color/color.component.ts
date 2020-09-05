import { Component, OnInit, Input } from '@angular/core';
import { ColorGridComponent } from '../color-grid/color-grid.component';
import { Color } from '../_interface/color';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  
  @Input() color$: Color;
  
  constructor() {}

  ngOnInit(): void {
  }




}
