import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'fractal-controller',
  templateUrl: './fractal-controller.component.html',
  styleUrls: ['./fractal-controller.component.scss']
})
export class FractalControllerComponent implements OnInit {

  config;

  constructor(private router: Router) {
    this.config= {
      depth: 1,
      posX: 0,
      posY: 0,
      color: 'blue'
    }
   }

  ngOnInit(): void {
    this.router.navigate(['home'])
  }

  updateMandelbrotConfig(e) {
    this.config = e; 
    console.log(this.config);
  }

}
