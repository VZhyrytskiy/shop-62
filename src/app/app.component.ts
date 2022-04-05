import { AfterViewInit, Component, ContentChild, ElementRef, HostListener, ViewChild } from '@angular/core';
import { HeaderComponent } from './core/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'shop';
  opened!: boolean;
  @ViewChild('appTitle') appTitile!: ElementRef<HTMLHeadingElement>;

  ngAfterViewInit(): void {
    this.appTitile.nativeElement.innerHTML = "Shop";
  }

  checkOpened(event: boolean) {
    this.opened = event;
  }

  checkMenuOpened() {
    this.opened = false;
  }
}
