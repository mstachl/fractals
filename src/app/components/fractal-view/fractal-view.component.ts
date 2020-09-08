import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
import { CONTEXT_NAME } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'fractal-view',
  templateUrl: './fractal-view.component.html',
  styles: ['canvas { border-style: solid }']
})
export class FractalViewComponent implements OnInit {
  @ViewChild('canvas', { static: true })
  canvas: ElementRef<HTMLCanvasElement>;  

  maxIter = 500;

  height = 500;

  
  width = 500;

  private _config;

  private ctx: CanvasRenderingContext2D;

  private colorMap = {
    0: 'black',
    10: ''
  }

  @Input()
  set config(val: any) {
    this._config = val;
    this.animate()
  }

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
  }
  
  animate(): void {

    this.ctx.clearRect(0,0,this.width,this.height)
    this.ctx.fillRect(20,20,2,2);
    
    for(let x=0; x < this.width; x++) {
      for(var y=0; y < this.height; y++) {
          var belongsToSet = 
              this.checkIfBelongsToMandelbrotSet(x/this.width*4/this._config.depth-2/this._config.depth+this._config.posX, 
                                            y/this.height*4/this._config.depth-2/this._config.depth-this._config.posY);
          if(belongsToSet.inSet) {
              this.ctx.fillStyle = "Black"
              this.ctx.fillRect(x,y, 1,1); // Draw a black pixel
          } else {
              //this.ctx.fillStyle = `rgba(100,100,100,${belongsToSet.iter/this.maxIter})`
              this.ctx.fillStyle = `rgba(0,0,${belongsToSet.iter/this.maxIter*255})`
              this.ctx.fillRect(x,y, 1,1); // Draw a black pixel
          } 
      } 
    }
  }

  private checkIfBelongsToMandelbrotSet(x, y) {
    // check if f(z) = z^2+c bounded, z0=0, z1=c
    var realComponentOfResult = x;
var imaginaryComponentOfResult = y;

for(var i = 0; i < this.maxIter; i++) {
     // Calculate the real and imaginary components of the result
     // separately
     var tempRealComponent = realComponentOfResult * realComponentOfResult
                             - imaginaryComponentOfResult * imaginaryComponentOfResult
                             + x;

     var tempImaginaryComponent = 2 * realComponentOfResult * imaginaryComponentOfResult
                             + y;

     realComponentOfResult = tempRealComponent;
     imaginaryComponentOfResult = tempImaginaryComponent;

     if (realComponentOfResult * imaginaryComponentOfResult > 10 )
        return { inSet: false, iter: i} ; // Not in the Mandelbrot set
}



return { inSet: true}; // Not in the set
}





}