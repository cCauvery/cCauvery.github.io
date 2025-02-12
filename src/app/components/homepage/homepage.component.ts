import { Component } from '@angular/core';
import { homepageData } from '../../../data-entries/homepage';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent {

  carouselImages = homepageData.carouselImages;
  aboutUs = homepageData.aboutUs;
  activities = homepageData.activities;
}
