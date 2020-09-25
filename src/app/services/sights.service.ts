import { Injectable } from '@angular/core';
import { Sight } from '../models/sight.model'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SightsService {

  MOCK_SIGHTS: Sight[] = [{title: '', posX: 0, posY: 0, depth: 1},{title: 'Spiral', posX: -0.7453, posY: 0.1127, depth: 1000},{title: 'Tentacles', posX: -0.745428, posY: 0.113009, depth: 3.0E4}, {title: 'Black hole', posX: 0.3369844464869, posY: 0.048778219666, depth: 1.8E10}, {title: 'Snake', posX: -1.25066, posY: 0.02012, depth: 1.7E4},
  {title: 'Snake2', posX: -0.748, posY: 0.1, depth: 1400}
];

  getMandelbrotSights(): Observable<Sight[]> {
    return of(this.MOCK_SIGHTS);
  } 
}

