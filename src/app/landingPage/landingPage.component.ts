import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import { NavbarComponent }  from './navbar/navbar.component';


@Component({
    selector: 'app-landingPage',
    standalone: true,
    imports: [CommonModule, NavbarComponent],
    template: `
    <section>
        <app-navbar> </app-navbar>
        <h1 class="fontSixtyfour">Rays first Angular Projekt</h1>
        <h2>Hello World</h2>
    </section>
    
    `,
    styleUrls: ['./landingPage.component.scss']
})
export class LandingPageComponent {}