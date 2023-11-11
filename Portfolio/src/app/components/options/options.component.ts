import { Component } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent {
   ToHome() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
   }

   ToAbout() {
    window.scroll({
      top: 1000,
      behavior: 'smooth'
    })
   }
   
   ToSkills() {
    window.scroll({
      top: 2000,
      behavior: 'smooth'
    })
   }
   
   ToProjects() {
    window.scroll({
      top: 3000,
      behavior: 'smooth'
    })
   }

   ToCertificates() {
    window.scroll({
      top: 4000,
      behavior: 'smooth'
    })
   }
}
