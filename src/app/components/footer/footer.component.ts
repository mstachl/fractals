import { Component, OnInit } from '@angular/core';
import { faLinkedin, faLinkedinIn, faXingSquare} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  faLinkedinIn = faLinkedin;
  faXing = faXingSquare;

  constructor() { }

  ngOnInit(): void { 
  }

}
