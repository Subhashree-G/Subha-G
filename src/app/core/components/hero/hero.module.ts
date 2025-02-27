import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderMenuComponent } from './header-menu/header-menu.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@NgModule({
  declarations: [
    HeaderMenuComponent,
    HeroSectionComponent,
    GalleryComponent,
    TestimonialsComponent,
  ],
  imports: [CommonModule],
  exports: [
    HeaderMenuComponent,
    GalleryComponent,
    HeroSectionComponent,
    TestimonialsComponent,
  ],
})
export class HeroModule {}
