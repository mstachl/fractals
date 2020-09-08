import { Component, OnInit, EventEmitter, Output } from '@angular/core';
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

  
  constructor(private fb: FormBuilder, private sights: SightsService) {}

  ngOnInit(): void {
    this.configForm = this.fb.group({
      depth: 1,
      posX: 0,
      posY: 0
    })
    this.sights.getMandelbrotSights().subscribe(val => this.options = val);
  }

  onSubmit() {

    this.update.emit(this.configForm.value);
  }

  do(e) {
    console.log(e);
    this.configForm.setValue({depth: e.depth, posX: e.posX, posY: e.posY});
  }

}