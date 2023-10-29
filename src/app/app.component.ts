import { Component, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public sccrollToBottom:any;
  public navbarActive:boolean = false;
  public screenResolution!:any;

  constructor(private renderer: Renderer2){}

  ngOnInit(){
    this.getScreenResolution();
  }
  ngAfterViewInit() {
    this.renderer.listen('window', 'resize', () => {
      this.getScreenResolution();
    });
  }
  getScreenResolution() {
    if(window.innerWidth < 1110){
       this.navbarActive = false;
    }else{
        this.navbarActive = true;
    }
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    if(window.scrollY > this.lastScrollTop){
      console.log('Scroll hacia abajo');
      this.sccrollToBottom = true;
    }
    this.sccrollToBottom = window.scrollY;
  }
  private lastScrollTop = 0;

  activeMenu(){
    this.navbarActive = !this.navbarActive;
  }
}
