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
  fieldSurveys = homepageData.fieldSurveys;

  selectedItem: any = null;

  openModal(item: any) {
    // Ensure fallback for images and description if not defined
    this.selectedItem = {
      ...item,
      images: item.images || [item.image],
      description: item.description || null
    };

    const modalElement = document.getElementById('detailsModal');
    if (modalElement) {
      const modal = new (window as any).bootstrap.Modal(modalElement);
      modal.show();
    }
  }
}
