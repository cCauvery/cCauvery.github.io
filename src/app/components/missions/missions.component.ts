import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { missionsData } from '../../../data-entries/mission';

@Component({
  selector: 'app-missions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.scss']
})
export class MissionsComponent {
  missions = missionsData || [];

  getCardClass(index: number): string {
    const row = Math.floor(index / 3);
    if (row === 0) return 'sky-orange';
    if (row === 1) return 'off-white';
    return 'grass-green';
  }
}
