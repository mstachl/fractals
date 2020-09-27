import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { SightsService} from '../../services/sights.service'
import { Sight } from '../../models/sight.model'

@Component({
  selector: 'mandelbrot',
  templateUrl: './mandelbrot.component.html',
  styleUrls: ['./mandelbrot.component.css']
})
export class MandelbrotComponent implements OnInit {

  configForm: FormGroup;

  options: Sight[] = []

  formValue = '';

  @Output() 
  update = new EventEmitter<any>();

  @Input()
  set config(val) {
    console.log(val);
    this.configForm = this.fb.group({
      depth: val.depth,
      posX: val.posX,
      posY: val.posY,
      color: val.color
    })
  }

  
  constructor(private fb: FormBuilder, private sights: SightsService) {}

  ngOnInit(): void {
    this.sights.getMandelbrotSights().subscribe(val => this.options = val);
  }

  onSubmit() { 
    console.log(this.configForm.value);

    this.update.emit(this.configForm.value);
  }

  do(e) {
    this.configForm.controls['depth'].setValue(e.depth);
    this.configForm.controls['posX'].setValue(e.posX);
    this.configForm.controls['posY'].setValue(e.posY);
  }


}