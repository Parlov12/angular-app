import { Component } from '@angular/core'; // component decorator from angular core

@Component({
    selector: 'app-header', // selector for the component
    standalone: true, // standalone property for the component - if we want module for the component, we can set it to false
    templateUrl: './header.component.html', // template url for the component,
    styleUrl: './header.component.css' // style url for the component -> we could also use style or styleUrls 
})

export class HeaderComponent {
    // to do
}   