import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {
   }

  ngOnInit(): void {
    this.router.navigate(['home'])
  }

  updateMandelbrotConfig(e) {
    this.config = e; 
    console.log(this.config);
  }

}
