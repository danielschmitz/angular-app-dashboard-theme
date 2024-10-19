import { Component, Renderer2 } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  darkMode:boolean = false;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private renderer: Renderer2) {}

  toogleDark():void{
    this.darkMode = !this.darkMode;
    this.renderer.removeClass(document.body,`dark-theme`)
    this.renderer.removeClass(document.body,`light-theme`)
    this.renderer.addClass(document.body,this.darkMode?'dark-theme':'light-theme')
  }

}
