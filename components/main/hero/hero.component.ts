import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  subirCv(){
    const archivo=document.getElementById('cv') as HTMLInputElement;
    if (archivo) {
      archivo.click();
    }
  }

}
