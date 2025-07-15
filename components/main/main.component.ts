import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';
import { FeaturesComponent } from './features/features.component';
import { CtaBannerComponent } from './cta-banner/cta-banner.component';

@Component({
  selector: 'app-main',
  imports: [
    HeroComponent,
    AboutComponent,
    FeaturesComponent,
    CtaBannerComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {}
