import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'navigation-wrapper',
  templateUrl: './navigation-wrapper.component.html',
  styleUrls: ['./navigation-wrapper.component.css']
})
export class NavigationWrapperComponent {

  toolbarItems = [{href: "/home", label: "Home"}, {href:"/about-us", label: "About us"}]
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
