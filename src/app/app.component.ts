import { AfterViewInit, Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {


  headerFooterFlag = signal<boolean>(true);
  urlString:string = ''

  router = inject(Router);  

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.urlString = event.url;
        if(this.urlString.includes('/signup')){
          this.headerFooterFlag.set(false);
        }else{
          this.headerFooterFlag.set(true);
        }
      }
    });
    
  }

}
