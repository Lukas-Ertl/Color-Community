import { Component, OnInit } from '@angular/core';
import { ColorComponent } from '../color/color.component';

@Component({
  selector: 'app-color-grid',
  templateUrl: './color-grid.component.html',
  styleUrls: ['./color-grid.component.css']
})
export class ColorGridComponent implements OnInit {

  colors = [
    {
      name: "Black",
      hexcode: "#000000"
    },
    {
      name: "Yellow",
      hexcode: "#ffff00"
    },
    {
      name: "Cyan",
      hexcode: "#00ffff"
    },
    {
      name: "Green",
      hexcode: "#32cd32"
    },
    {
      name: "Red",
      hexcode: "#ff0000"
    },
    {
      name: "Blue",
      hexcode: "#4169e1"
    },
    {
      name: "Purple",
      hexcode: "#9400d3"
    },
    {
      name: "Pink",
      hexcode: "#ffc0cb"
    },
    {
      name: "Orange",
      hexcode: "#ff8c00"
    },
    {
      name: "Gray",
      hexcode: "#708090"
    },
    {
      name: "White",
      hexcode: "#ffffff"
    },
    {
      name: "Brown",
      hexcode: "#8b4513"
    },
  ];


  constructor() { }

  ngOnInit(): void {
  }

  OnAddColor():void{
    console.log(this.colors);
  }

}
