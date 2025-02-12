import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { missions, Mission, Quarter } from '../../../data-entries/data-repoitory';

@Component({
  selector: 'app-data-repository',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-repository.component.html',
  styleUrl: './data-repository.component.scss'
})
export class DataRepositoryComponent implements OnInit {
  missionsList: Mission[] = missions;

  quarters: Quarter[] = [Quarter.Q1, Quarter.Q2, Quarter.Q3, Quarter.Q4];

  bgColors = ['bg-light', 'bg-info-subtle', 'bg-success-subtle', 'bg-warning-subtle', 'bg-danger-subtle',
              'bg-primary-subtle', 'bg-secondary-subtle', 'bg-dark-subtle', 'bg-light-subtle'];

  constructor() {}

  ngOnInit(): void {}

  trackByIndex(index: number): number {
    return index;
  }

  isValidLink(link: unknown): boolean {
    return typeof link === 'string' && this.isValidUrl(link);
  }

  private isValidUrl(url: string): boolean {
    try {
      const parsedUrl = new URL(url);
      return parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:";
    } catch (error) {
      return false;
    }
  }
}
