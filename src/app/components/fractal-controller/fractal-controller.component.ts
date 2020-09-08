import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fractal-controller',
  templateUrl: './fractal-controller.component.html',
  styleUrls: ['./fractal-controller.component.css']
})
export class FractalControllerComponent implements OnInit {

  config = {
    depth: 1,
    posX: 0,
    posY: 0
  }

  constructor() {
   }

  ngOnInit(): void {
  }

  updateMandelbrotConfig(e) {
    this.config = e; 
    console.log(this.config);
  }

}
