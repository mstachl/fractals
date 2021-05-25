import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projectList = [{
    href: '/mandelbrot', 
    title: 'Generating fractal images from the mandelbrot set', 
    altText: 'Mandelbrot generator', 
    img: 'assets/img/Mandel_zoom_00_mandelbrot_set.jpg', 
    author: 'Markus Stachl', 
    date: '01.12.2020', 
    desc: 'A small Javascript web application to generate images from the famous mandelbrot set including zooming, coloring.'
  }, {
    href: '/raspi', 
    title: 'Raspberry Pi: Digitaler Bilderrahmen', 
    altText: 'Raspberry Pi', 
    img: 'assets/img/raspi.png', 
    author: 'Markus Stachl', 
    date: '01.10.2020', 
    desc: 'Einsteigerprojekt für den Raspberry Pi 3B+. \n Erstellung eines digitalen Bilderrahmens unter Verwendung des Multimediacenters KODI.'
  }
  ];
  
  getProjects() {
    return this.projectList;
  }

}
 